import styled from "styled-components";
import App from "config/App";

const { appUrl } = App;
export const ErrorPageContainer = styled.div`
  overflow: hidden;
  .bg-container {
    margin-top: -150px;
  }
  .image-bg {
    padding-top: 200px;
    background-image: url(${`${appUrl}/Images/ErrorPage.jpg`});
    width: 100vw;
    height: 119vh;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
  }
  .error-code {
    color: #08cf90;
    font-size: 9rem;
    display: flex;
    justify-content: center;
    font-family: "Montserrat";
    font-weight: bold;
  }
  .error-message {
    font-size: 3rem;
    display: flex;
    justify-content: center;
    font-family: "Montserrat";
    font-weight: bold;
    margin: 0 5%;
    text-align: center;
  }
  .error-container {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  margin: 10px;
  border-radius: 1.3rem;
  border: none;
  font-weight: bold;
  padding: 0.2rem 2rem;
  font-size: 3rem;
  color: white;
  background-color: #08cf90;
  :hover {
    opacity: 0.9;
  }
  :focus {
    outline: none;
  }
`;
