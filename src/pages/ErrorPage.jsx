import React from "react";
import { useHistory } from "react-router-dom";
import { ErrorPageContainer, Button } from "components/error/style";

const ErrorPage = ({ status, message }) => {
  const history = useHistory();

  const redirectToHome = () => {
    !!window.localStorage.getItem("accessToken")
      ? history.push("/")
      : history.push("/login");
  };

  return (
    <ErrorPageContainer>
      <div className="bg-container">
        <div className="image-bg">
          <div className="error-code">{status}</div>
          <div className="error-message">{message}</div>
          <div className="error-container">
            <Button onClick={() => redirectToHome()}>Back to home</Button>
          </div>
        </div>
      </div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
