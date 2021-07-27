import React from "react";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Plan from "./components/Plan";
import Invites from "./components/Invites";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute path="/invites" component={Invites} />
        <PrivateRoute path="/plan" component={Plan} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
