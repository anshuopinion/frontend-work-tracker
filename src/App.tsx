import "./styles/main.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import { useStateValue } from "store";
import Home from "./pages/Home";
function App() {
  // const [{ token, role }] = useStateValue();

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
