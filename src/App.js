import logo from "./logo.svg";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="login">Login</Link>
        <Link to="signup">Sign Up</Link>
      </nav>

      <Switch>
        <Route path="/signup">{Signup}</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {Homepage}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
