import React from "react";
import {BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css';


const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/home"} component={Home} />
        <Redirect from={"/"} to={"/login"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
