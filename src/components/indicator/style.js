import styled from "styled-components";
import App from "config/App";

const { appUrl } = App;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0 10% 0 10%;
  .indicator-image {
    background-image: url(${`${appUrl}/Images/Indicator.png`});
    width: 50%;
    height: 70%;
    background-repeat: no-repeat;
  }

  .indicator-message {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: "Montserrat";
  }
`;
