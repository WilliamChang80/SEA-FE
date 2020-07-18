import React, { useState } from "react";
import axios from "axios";

import { Route, Redirect } from "react-router-dom";

import { verifyUserUrl } from "config/Url";
import { useEffect } from "react";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    const verifyUser = async () => {
      await axios
        .get(verifyUserUrl, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`
          }
        })
        .then((res) => {
          return res.data.code === 200
            ? setIsAuthenticated(true)
            : setIsAuthenticated(false);
        });
    };
    verifyUser();
  }, [isAuthenticated]);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated !== undefined &&
        (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)
      }
    />
  );
};

export default ProtectedRoute;
