import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//Pages
import LoginPage from "./pages/LoginPage"
import BackendPage from "./pages/BackendConfiguration"
import NotFoundPage from "./pages/404"

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/BackendConfiguration" component = {BackendPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  }
}

export default App;
