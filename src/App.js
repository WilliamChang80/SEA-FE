import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginPage from "pages/LoginPage";
import ErrorPage from "pages/ErrorPage";
import HomePage from "pages/HomePage";
import MyItemPage from "pages/MyItemPage";
import RegisterPage from "pages/RegisterPage";
import CreateItemPage from "pages/CreateItemPage";
import EditItemPage from "pages/EditItemPage";
import UpdateProfilePage from "pages/UpdateProfilePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "styles/globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/my-item" component={MyItemPage} />
          <Route exact path="/item/add" component={CreateItemPage} />
          <Route exact path="/item/edit" component={EditItemPage} />
          <Route exect path="/profile" component={UpdateProfilePage} />
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
