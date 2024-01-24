import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash, FaExclamation } from 'react-icons/fa';

import { toast } from 'react-toastify';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import {
  NewStudent,
  ProfilePicture,
  StudentContainer,
  StudentRow,
} from './styled';
import Loading from '../../components/Loading';

function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/students');
      const { data } = response;
      setStudents(data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamationIcon = e.currentTarget.nextSibling;
    exclamationIcon.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDeleteConfirm = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/students/${id}`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
      setIsLoading(false);
    } catch (error) {
      const status = get(error, 'response.status', 0);
      if (status === 401) {
        toast.error('Please sign-in before continuing...');
      } else {
        toast.error('Something went wrong...');
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Students</h1>
      <NewStudent to="/student/">New Student</NewStudent>
      <StudentContainer>
        {students &&
          students.map((student, index) => (
            <StudentRow key={String(student.id)}>
              <ProfilePicture>
                {get(student, 'Photos[0].url', false) ? (
                  <img src={student.Photos[0].url} alt="profile_picture" />
                ) : (
                  <FaUserCircle size={34} />
                )}
              </ProfilePicture>
              <span>{student.first_name}</span>
              <span>{student.email}</span>

              <Link to={`/student/${student.id}/edit`}>
                <FaEdit size={16} />
              </Link>

              <Link
                onClick={handleDeleteAsk}
                to={`/student/${student.id}/delete`}
              >
                <FaTrash size={16} />
              </Link>

              <FaExclamation
                onClick={(e) => handleDeleteConfirm(e, student.id, index)}
                size={16}
                display="none"
                cursor="pointer"
              />
            </StudentRow>
          ))}
      </StudentContainer>
    </Container>
  );
}

export default Students;
