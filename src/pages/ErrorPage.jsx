import React from "react";
import { ErrorPageContainer } from "components/error/style";
import App from "config/App";

const { appUrl } = App;
const ErrorPage = ({ status, message }) => {
  return (
    <ErrorPageContainer>
      <div className="bg-container">
        <div className="image-bg">
          <div className="error-code">{status}</div>
          <div className="error-message">{message}</div>
          <div className="error-container">
            <img
              className="error-button"
              src={`${appUrl}/Images/Rocket.png`}
            ></img>
          </div>
        </div>
      </div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
