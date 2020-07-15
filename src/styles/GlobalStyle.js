import { createGlobalStyle } from "styled-components";
import App from "config/App";

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
  background-color: #232324;
  color: white;
  font-size: 1.2rem;
}

* {
  margin: 0;
  padding: 0;
}

.modal-title {
  color: black;
  font-size: 4rem;
  font-family: "Montserrat";
  font-weight: bold;
}


.modal-title-sub {
  color: #08cf90;
  font-size: 4rem;
  font-family: "Montserrat";
  font-weight: bold;
}


.modal-message {
  color: black;
  font-size: 2rem;
  font-family: "Montserrat";
  font-weight: bold;
  text-align: center;
}

.modal-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.modal-button {
  font-family: "Montserrat";
  margin: 10px;
  border-radius: 1.3rem;
  border: none;
  font-weight: bold;
  padding: 0.2rem 2rem;
  font-size: 3rem;
  color: white;
  background-color: red;
  
}

.modal-button:hover {
    opacity: 0.9;
    cursor: pointer;
}

.modal-button:focus {
    outline: none;
}

.yes {
  background-color: red;
}
.no {
  background-color: green;
}
.modal-close {
    position:absolute;
    right:10px;
    top:10px;
    font-size: 2.5rem;
    color: black;
}
.modal-close:hover {
  cursor: pointer;
  opacity: 0.9;
}
`;
