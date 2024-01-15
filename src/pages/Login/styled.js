import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  input{
    height: 32px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    padding: 0 10px;

    &:focus {
      border: 2px solid ${colors.primaryColor};
      transition: all 0.1s ease-in-out;
    }
  }
`;
