import styled from "styled-components";

export const FormContainer = styled.div`
  .form-container {
    background-color: rgba(black, 0.7);
    margin: 3rem;
    padding: 3rem;
    padding-top: 0rem;
  }
  .error-message {
    color: red;
  }
  input {
    border-radius: 1rem;
    padding-left: 1rem;
    border: 3px solid black;
  }
  input:focus {
    border-bottom: 3px solid black !important;
  }
  select {
    border-radius: 1rem;
    padding-left: 1rem;
    width: 100%;
    border: 3px solid black;
  }
  select:focus {
    border: 3px solid black;
  }
  select:hover {
    cursor: pointer;
  }
  *:focus {
    outline: none;
  }
  .form-title {
    font-size: 3rem;
    font-weight: bold;
    font-family: "Montserrat";
  }
  .form-sub {
    font-size: 2rem;
    font-family: "Montserrat";
  }
  .field-container {
    display: flex;
    flex-direction: row;
  }
`;
