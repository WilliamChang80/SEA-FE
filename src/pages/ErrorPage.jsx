import React from "react";
import { ErrorPageContainer, Button } from "components/error/style";

const ErrorPage = ({ status, message }) => {
  return (
    <ErrorPageContainer>
      <div className="bg-container">
        <div className="image-bg">
          <div className="error-code">{status}</div>
          <div className="error-message">{message}</div>
          <div className="error-container">
            <Button>Back to home</Button>
          </div>
        </div>
      </div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
