import { createGlobalStyle } from "styled-components";
import App from "Config/App";

const { appUrl } = App;

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: url(${`${appUrl}/Fonts/Montserrat-Regular.otf`}) format("otf");
}
@font-face {
  font-family: "Roboto";
  src: url(${`${appUrl}/Fonts/Roboto-Regular.ttf`});
}
body {
  font-family: "Roboto";
}
`;
