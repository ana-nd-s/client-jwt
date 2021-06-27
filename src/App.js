/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import UrlConfig from "./config";
import { useStoreActions, useStoreState } from "easy-peasy";

const AuthChecker = () => {
  const isAuth = useStoreState(state => state.isAuthorised);
  const setIsAuthorised = useStoreActions(actions => actions.setIsAuthorised);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    handleAuth()
      .then((res) => {
        if (res.status === "success") {
          setIsAuthorised(true)
        } else {
          setIsAuthorised(false)
        }
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <></>
  }

  return (
    <BrowserRouter>
      <Switch>
        {!isAuth && <Route path={"/login"} component={Login} />}
        {isAuth && <Route path={"/home"} component={Home} exact />}
        {!isAuth && <Redirect to="/login" />}
        {isAuth && <Redirect to="/home" />}
      </Switch>
    </BrowserRouter>
  );
}

const handleAuth = () => {
  const protect = `${UrlConfig.BASE_URL}/user/protect`
  const options = {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }
  return fetch(protect, options)
    .then(response => response.json())
    .then((res) => res)
};

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} component={AuthChecker} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
