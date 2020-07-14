import React, { useState } from "react";

import { LoginFormContainer, Input, Button } from "./style";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <LoginFormContainer>
      <div className="bg-container">
        <div className="card-container">
          <div className="card-title">LOGIN</div>
          <div className="form-container">
            <div className="input-title fa fa-user"></div>
            <Input
              type="text"
              placeholder="Enter Your Username"
              className="form-username"
            />
          </div>
          <div className="form-container">
            <div className="input-title fa fa-lock"></div>
            <Input
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Your Password"
              className="form-password"
            />
            <div
              className={`toggle-password fa ${
                passwordShown ? "fa-eye" : "fa-eye-slash"
              }`}
              onClick={() => togglePassword()}
            ></div>
          </div>

          <Button>Login</Button>
          <div className="card-submenu">
            Not having account? Register <a href="/register">here</a>
          </div>
        </div>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
