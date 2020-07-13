import styled from "styled-components";
import App from "config/App";

const { appUrl } = App;
export const ErrorPageContainer = styled.div`
  background-image: url(${`${appUrl}/Images/ErrorPage.jpg`});
  height: 100vh;
  width: 100vw;

  .error-code {
    color: #08cf90;
    font-size: 3rem;
  }
  .error-message {
    font-size: 3rem;
  }
`;
