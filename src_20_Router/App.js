import React, { Component } from "react";
import "./App.css";
import Die from "./Die";
import "./Die.css";
import Ball from "./Ball";
import "./Ball.css";
import Machine from "./Machine";
import { Route, Switch, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li style={{ display: "inline-block" }}>
              <NavLink exact activeClassName="active-link" to="/die">
                Die
              </NavLink>
            </li>
            <li style={{ display: "inline-block", margin: "10px" }}>
              <NavLink exact activeClassName="active-link" to="/ball">
                ball
              </NavLink>
            </li>
            <li style={{ display: "inline-block", margin: "10px" }}>
              <NavLink exact activeClassName="active-link" to="/machine">
                Machine
              </NavLink>
            </li>
            <li style={{ display: "inline-block", margin: "10px" }}>
              <NavLink exact activeClassName="active-link" to="/ball/(b)">
                Ball*b
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/die" component={Die} />
          <Route exact path="/ball" component={Ball} />
          <Route exact path="/machine" component={Machine} />
          <Route exact path="/ball/(b)" render={Ball} />
        </Switch>
      </div>
    );
  }
}

export default App;
