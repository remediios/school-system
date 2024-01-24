import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
text-align: center;
`;

export const Form = styled.form`
 label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 4px solid ${colors.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input {
    display: none;
  }
`;

export const SelectPhoto = styled.p`
  color: rgba(0,0,0, 0.6);
`;
