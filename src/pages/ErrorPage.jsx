import React from "react";
import { ErrorPageContainer } from "components/error/style";

const ErrorPage = ({ status, message }) => {
  return (
    <ErrorPageContainer>
      <div className="error-code">{status}</div>
      <div className="error-message">{message}</div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
