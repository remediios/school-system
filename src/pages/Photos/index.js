import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form, SelectPhoto } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

function Photos({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        const studentPhoto = get(data, 'Photos[0].url', '');
        setPhoto(studentPhoto);
        setIsLoading(false);
      } catch (error) {
        toast.error('Error while getting image');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, history]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setPhoto(fileUrl);

    const formData = new FormData();
    formData.append('student_id', id);
    formData.append('photo', file);

    try {
      setIsLoading(true);
      await axios.post('/photos/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Photo uploaded successfully');

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      const status = get(error, 'response.status', 0);
      toast.error('Error while uploading photo');

      if (status === 401) {
        dispatch(actions.signInFailure());
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Photos</Title>
      <Form>
        <label htmlFor="photo">
          {photo ? (
            <img src={photo} alt="profilePhoto" />
          ) : (
            <SelectPhoto>Upload</SelectPhoto>
          )}
          <input type="file" name="photo" id="photo" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Photos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Photos;
