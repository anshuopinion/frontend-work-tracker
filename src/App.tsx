// import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "pages/Home";

import { theme } from "theme";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
import { useAuth } from "hooks/auth-hooks";
import { useStateValue } from "store";
import PerDayWork from "pages/PerDayWork";

function App() {
  const [{ token }] = useStateValue();
  const { setCookieLogin } = useAuth();

  useEffect(() => {
    setCookieLogin();
  }, [setCookieLogin]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
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
            {token !== null && (
              <Route path="/perdaywork">
                <PerDayWork />
              </Route>
            )}
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
