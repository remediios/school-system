import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: "Open Sans", sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: auto;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  //Success Toast
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: white;
  }

  .Toastify__progress-bar--success {
    background: white;
  }

  //Error Toast
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: white;
  }

  .Toastify__progress-bar--error {
    background: white;
  }

  //Info Toast
  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background: ${colors.infoColor};
    color: white;
  }

  .Toastify__progress-bar--info {
    background: white;
  }

  //Warning Toast
  body .Toastify .Toastify__toast-container .Toastify__toast--warning {
    background: ${colors.warningColor};
    color: white;
  }

  .Toastify__progress-bar--warning {
    background: white;
  }

  .Toastify__toast-icon > svg {
    fill: white;
  }

  .Toastify__close-button {
    color: white
  }



`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
