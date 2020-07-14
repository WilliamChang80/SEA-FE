import React from "react";

import { GlobalStyle } from "styles/globalStyle";
import LoginPage from "pages/LoginPage";
import ErrorPage from "pages/ErrorPage";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
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
