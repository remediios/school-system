import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { ErrorDiv, ErrorTitle } from './styles';

function Page404() {
  return (
    <Container>
      <ErrorDiv>
        <ErrorTitle>404 ERROR</ErrorTitle>
        <p>The page you asked for does not exist!</p>
      </ErrorDiv>
    </Container>
  );
}

export default Page404;
