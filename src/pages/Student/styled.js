import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;


  input {
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

    &::placeholder{
      font-size: 14px;
    }
  }

  button {
    margin-top: 10px;
  }

`;

export const Title = styled.h1`
  text-align: center;
`;

export const ProfilePicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 10px;
  position: relative;
  margin-top: 20px;

  img{
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
