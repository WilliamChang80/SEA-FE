import styled from "styled-components";
import App from "config/App";

const { appUrl } = App;
export const ErrorPageContainer = styled.div`
  overflow: hidden;
  .bg-container {
    margin-top: -150px;
  }
  .image-bg {
    padding-top: 150px;
    background-image: url(${`${appUrl}/Images/ErrorPage.jpg`});
    width: 100vw;
    height: 100vh;
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
  }
  .error-button {
    display: flex;
    width: 30rem;
    height: 30rem;
  }
  .error-button:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;
