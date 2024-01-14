import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clickButtonRequest());
  }

  return (
    <Container>
      <Title isRed={false}>
        Login Page
        <small>Test</small>
      </Title>
      <p>Lorem</p>
      <button type="submit" onClick={handleClick}>
        Login
      </button>
    </Container>
  );
}

export default Login;
