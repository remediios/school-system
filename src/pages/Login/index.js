import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

function Login() {
  React.useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('/students');
        const { data } = response;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <Container>
      <Title isRed={false}>
        Login Page
        <small>Test</small>
      </Title>
      <p>Lorem</p>
    </Container>
  );
}

export default Login;
