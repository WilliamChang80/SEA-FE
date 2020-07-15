import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { LoginFormContainer, Input, Button, Form } from "./style";
import { loginUrl } from "config/Url";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const { state } = history.location;
    !!state?.message && toast.success(state.message);
    !!state && history.replace({ ...history.location, state: null });
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post(loginUrl, data)
      .then((res) => {
        res.data.code === 200
          ? window.localStorage.setItem("accessToken", res.data.data.token)
          : toast.error(res.data.message);
      })
      .catch((e) => toast.error(e.message));
    reset();
  };
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
                name="userName"
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
