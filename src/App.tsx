// import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "pages/Home";
import GlobalStyle from "theme/globalStyles";
import theme from "theme";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  // const [{ token, role }] = useStateValue();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
