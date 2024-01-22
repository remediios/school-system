import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaTrash } from 'react-icons/fa';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { ProfilePicture, StudentContainer, StudentRow } from './styled';
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

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Students</h1>
      <StudentContainer>
        {students &&
          students.map((student) => (
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

              <Link to={`/student/${student.id}/delete`}>
                <FaTrash size={16} />
              </Link>
            </StudentRow>
          ))}
      </StudentContainer>
    </Container>
  );
}

export default Students;
