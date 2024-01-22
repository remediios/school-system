import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <Container>
      <div />
      <span>Loading...</span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

export default Loading;