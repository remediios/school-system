import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail, isFloat, isInt } from 'validator';
import { useDispatch } from 'react-redux';
import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

function Student({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', 0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getStudentData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/students/${id}`);
        const studentPhoto = get(data, 'Photos[0].url', '');
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setAge(data.age);
        setWeight(data.weight);
        setHeight(data.height);

        setIsLoading(false);
      } catch (err) {
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
        setIsLoading(false);
      }
    }
    getStudentData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (firstName.length < 3 || firstName.length > 255) {
      toast.error('First name must be between 3 and 255 characters');
      formErrors = true;
    }

    if (lastName.length < 3 || lastName.length > 255) {
      toast.error('Last name must be between 3 and 255 characters');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Invalid email address');
      formErrors = true;
    }

    if (!isInt(String(age))) {
      toast.error('Invalid age');
      formErrors = true;
    }

    if (!isFloat(String(weight))) {
      toast.error('Invalid weight');
      formErrors = true;
    }

    if (!isFloat(String(height))) {
      toast.error('Invalid height');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);

      const data = {
        first_name: firstName,
        last_name: lastName,
        email,
        age,
        weight,
        height,
      };

      if (id) {
        // Editing Student
        await axios.put(`/students/${id}`, data);
        toast.success('Student updated successfully');
        history.push('/');
      } else {
        // Creating Student
        await axios.post('/students', data);
        toast.success('Student added successfully');
        history.push('/');
      }

      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);
      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Unknown error');
      }
      if (status === 401) {
        dispatch(actions.signInFailure());
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit Student' : 'New Student'}</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight"
        />
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
        />
        <button type="submit">{id ? 'Edit Student' : 'Add Student'}</button>
      </Form>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};

export default Student;
