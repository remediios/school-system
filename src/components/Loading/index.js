import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpin from 'react-loading-spin';
import { Container } from './styled';

function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <Container>
      <div />
      <LoadingSpin primaryColor="crimson" />
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
