import React from "react";

import { GlobalStyle } from "styles/globalStyle";
import LoginPage from "pages/LoginPage";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import RegisterForm from "components/register";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/home" component={HomePage} />
          <Route
            path="*"
            render={() => (
              <ErrorPage
                status={404}
                message={"Whoops, looks like you get in the wrong page"}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
