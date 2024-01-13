import styled from 'styled-components';

export const Title = styled.h1`
  small {
    font-size: 12px;
    font-weight: 400;
  }
  color: ${(props) => (props.isRed ? 'red' : 'black')};
`;
