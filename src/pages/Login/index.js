import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

function Login() {
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
