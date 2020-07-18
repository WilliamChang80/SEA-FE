import styled from "styled-components";

export const UpdateProfileContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  .form-title {
    text-align: center;
  }
  .form-logo {
    display: flex;
    justify-content: center;
    margin: 5% 15%;
    font-size: 15rem;
  }
  .form-title-sub {
    font-family: "Montserrat";
    font-size: 2rem;
    text-align: center;
  }

  .form-inline {
    display: flex;
    flex-direction: row;
  }
  .btn-cancel {
    background-color: red;
    color: white;
    border: none;
  }
  .btn-submit {
    background-color: green;
    color: white;
    border: none;
  }
  .form-checkbox {
    font-size: 2rem;
    -ms-transform: scale(2);
    -moz-transform: scale(2);
    -webkit-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
    margin: 10px;
  }
  .confirmation {
    font-family: "Montserrat";
    font-size: 1.5rem;
  }
`;
