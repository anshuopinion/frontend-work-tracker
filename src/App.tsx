// import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Home from "pages/Home";
import { StylesProvider } from "@material-ui/core";

import theme from "theme";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useAuth } from "hooks/auth-hooks";
import { useStateValue } from "store";

function App() {
  const [{ token }] = useStateValue();
  const { setCookieLogin } = useAuth();

  useEffect(() => {
    setCookieLogin();
  }, [setCookieLogin]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              {token === null && (
                <Route path="/login">
                  <Login />
                </Route>
              )}
              {token === null && (
                <Route path="/signup">
                  <Signup />
                </Route>
              )}
              <Redirect to="/" />
            </Switch>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </QueryClientProvider>
  );
}

export default App;
