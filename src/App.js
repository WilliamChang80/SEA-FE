import React from "react";

import { GlobalStyle } from "styles/globalStyle";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import ErrorPage from "pages/ErrorPage";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={MainPage} />
        <Route
          path="*"
          render={() => (
            <ErrorPage
              status={404}
              message={"Whoops, looks like you get in wrong page"}
            />
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
