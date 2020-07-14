import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { LoginFormContainer, Input, Button, Form } from "./style";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <LoginFormContainer>
      <div className="bg-container">
        <div className="card-container">
          <div className="card-title">LOGIN</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
              <div className="input-title fa fa-user"></div>
              <Input
                type="text"
                placeholder="Enter Your Username"
                className="form-username"
                name="username"
                ref={register({ required: true })}
              />
            </div>
            {errors.username && (
              <div className="error-message">This field is required</div>
            )}
            <div className="form-container">
              <div className="input-title fa fa-lock"></div>
              <Input
                type={passwordShown ? "text" : "password"}
                placeholder="Enter Your Password"
                className="form-password"
                name="password"
                ref={register({ required: true })}
              />
              <div
                className={`toggle-password fa ${
                  passwordShown ? "fa-eye" : "fa-eye-slash"
                }`}
                onClick={() => togglePassword()}
              />
            </div>
            {errors.password && (
              <div className="error-message">This field is required</div>
            )}
            <Button type="submit">Login</Button>
          </Form>
          <div className="card-submenu">
            Not having account? Register <a href="/register">here</a>
          </div>
        </div>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
