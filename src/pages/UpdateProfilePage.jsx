import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { UpdateProfileContainer } from "components/update-profile/style";
import { FormContainer } from "components/form/style";
import { Input, Button, Form } from "components/login/style";
import Navbar from "components/navbar";
import { updateUserUrl, loginUrl } from "config/Url";

const UpdateProfilePage = () => {
  const [isChangePassword, setChangePassword] = useState(false);
  const history = useHistory();
  const toggleChangePassword = () => setChangePassword(!isChangePassword);

  const { register, handleSubmit, errors, reset, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      username: window.localStorage.getItem("username")
    }
  });

  const setLoginInformation = (data) => {
    window.localStorage.setItem("accessToken", data.token);
    window.localStorage.setItem("username", data.user.username);
    window.localStorage.setItem("userId", data.user.id);
    history.push("/");
  };

  const redirectToHome = (username, password) => {
    const data = {
      userName: username,
      password: password
    };
    toast.success("Successfully Updated Profile");
    axios
      .post(loginUrl, data)
      .then((res) => {
        setLoginInformation(res.data.data);
      })
      .catch((e) => toast.error(e.message));
  };

  const onSubmit = (formData) => {
    const data = {
      oldUserName: localStorage.getItem("username"),
      newUserName: formData.username,
      newPassword: isChangePassword ? formData.newPassword : null,
      oldPassword: formData.oldPassword
    };
    const password = isChangePassword
      ? formData.newPassword
      : formData.oldPassword;
    axios
      .put(updateUserUrl(localStorage.getItem("userId")), data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`
        }
      })
      .then((res) =>
        res.data.code === 200
          ? redirectToHome(formData.username, password)
          : toast.error(res.data.message)
      )
      .catch((e) => toast.error(e.message));
    reset();
    setChangePassword(false);
  };

  return (
    <UpdateProfileContainer>
      <Navbar />
      <div className="container">
        <FormContainer>
          <div className="form-title">Update Profile</div>
          <div className="fa fa-user-circle-o form-logo"></div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-title-sub">Username</div>
            <Input
              name="username"
              placeholder="Enter your name"
              className="form-name"
              type="text"
              ref={register({ required: true })}
            />
            {errors.username?.type === "required" && (
              <div className="error-message">This field is required</div>
            )}

            <div className="form-title-sub">Old Password</div>
            <Input
              name="oldPassword"
              placeholder="Enter your old password"
              className="form-name"
              type="password"
              ref={register({ required: true })}
            />
            {errors.oldPassword?.type === "required" && (
              <div className="error-message">This field is required</div>
            )}
            <div className="form-inline">
              <Input
                name="isChangePassword"
                checked={isChangePassword}
                onChange={() => toggleChangePassword()}
                className="form-checkbox"
                type="checkbox"
              />
              <div className="confirmation">Update password</div>
            </div>
            <div className="form-title-sub">New Password</div>
            <Input
              name="newPassword"
              placeholder="Enter your new password"
              className="form-name"
              type="password"
              ref={register({ required: isChangePassword })}
              disabled={!isChangePassword}
            />
            {errors.newPassword?.type === "required" && (
              <div className="error-message">This field is required</div>
            )}
            <div className="form-title-sub">New Password Confirmation</div>
            <Input
              name="newPasswordConfirm"
              placeholder="Enter your new password again"
              className="form-name"
              type="password"
              ref={register({
                required: isChangePassword,
                validate: (value) =>
                  value === getValues("newPassword") || !isChangePassword
              })}
              disabled={!isChangePassword}
            />
            {(errors.newPasswordConfirm?.type === "required" && (
              <div className="error-message">This field is required</div>
            )) ||
              (errors.newPasswordConfirm?.type === "validate" && (
                <div className="error-message">Password must be same</div>
              ))}
            <div>
              <Button onClick={() => history.push("/")} className="btn-cancel">
                Cancel
              </Button>
              <Button type="submit" className="btn-submit">
                Update Profile
              </Button>
            </div>
          </Form>
        </FormContainer>
      </div>
    </UpdateProfileContainer>
  );
};

export default UpdateProfilePage;
