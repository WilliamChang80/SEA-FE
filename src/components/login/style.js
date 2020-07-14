import styled from "styled-components";

export const LoginFormContainer = styled.div`
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 27rem;
    border-radius: 0.5rem;
    padding: 2rem;
    padding-bottom: 5rem;
  }
  .card-title {
    font-size: 3rem;
    font-family: "Montserrat";
    color: #08cf90;
    font-weight: bold;
  }
  .input-title {
    margin-top: 15px;
    font-size: 1.7rem;
    color: grey;
    font-weight: bold;
    text-align: center;
  }
  .bg-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .toggle-password {
    color: black;
    font-size: 1.7rem;
    margin-top: 11px;
    margin-left: 10px;
  }
  .toggle-password:hover {
    cursor: pointer;
  }
  .form-container {
    display: flex;
    width: 300px;
    flex-direction: row;
  }

  .card-submenu {
    font-size: 1rem;
    color: black;
    font-family: "Montserrat";
  }
  .error-message {
    color: red;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);
  font-family: "Montserrat";
  margin: 10px;
  font-weight: bold;
  :focus {
    outline: none;
    border-bottom: 3px solid #08cf90;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  margin: 10px;
  border-radius: 1.3rem;
  border: none;
  font-weight: bold;
  padding: 0.2rem 2rem;
  font-size: 2rem;
  color: #08cf90;
  border: 3px solid #08cf90;
  background-color: white;
  :hover {
    opacity: 0.9;
  }
  :focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
