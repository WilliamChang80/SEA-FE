import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { RegisterFormContainer } from "./style";
import {
  Input,
  Button,
  LoginFormContainer,
  Form
} from "components/login/style";
import { registerUrl } from "config/Url";

const RegisterForm = () => {
  const { register, handleSubmit, errors, getValues, reset } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    axios
      .post(registerUrl, data)
      .then((res) =>
        res.data.code === 200
          ? history.push("/login", { message: "Success Added User" })
          : toast.error(res.data.message)
      )
      .catch((e) => toast.error(e));
    reset();
  };

  return (
    <RegisterFormContainer>
      <LoginFormContainer>
        <div className="bg-container">
          <div className="card-container">
            <div className="card-title">Register</div>
            <div className="input-title">Username</div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                placeholder="Enter Your Username"
                className="form-username"
                name="userName"
                ref={register({ required: true })}
              />
              {errors.username && (
                <div className="error-message">This field is required</div>
              )}
              <div className="input-title">Password</div>
              <Input
                type={"password"}
                placeholder="Enter Your Password"
                className="form-password"
                name="password"
                ref={register({
                  required: true
                })}
              />
              {errors.password && (
                <div className="error-message">This field is required</div>
              )}
              <div className="input-title">Confirm Password</div>
              <Input
                type={"password"}
                placeholder="Enter Your Password"
                className="form-password"
                name="passwordConfirm"
                ref={register({
                  required: true,
                  validate: (value) => value === getValues("password")
                })}
              />
              {(errors.passwordConfirm?.type === "required" && (
                <div className="error-message">This field is required</div>
              )) ||
                (errors.passwordConfirm?.type === "validate" && (
                  <div className="error-message">Password must be same</div>
                ))}

              <Button type="submit">Submit</Button>
            </Form>
            <div className="card-submenu">
              Already having account? Sign in <a href="/login">here</a>
            </div>
          </div>
        </div>
      </LoginFormContainer>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
