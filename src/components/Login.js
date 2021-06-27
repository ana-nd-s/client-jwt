import React, { useState } from "react";
import UrlConfig from "../config";
import { useStoreActions } from "easy-peasy";

const Login = ({ history, setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const setIsAuthorised = useStoreActions(actions => actions.setIsAuthorised);


  const handleLogin = () => {
    const login = `${UrlConfig.BASE_URL}/user/login`
    const options = {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }
    fetch(login, options)
      .then(response => response.json())
      .then((data) => {
        if (data.error) {
          setError(true)
          alert(data.error)
          return
        }
        setIsAuthorised(true)
        history.push('/home')
      }).catch((error) => {
        setError(true)
      });
  };

  return (
    <div className="container">
      <div className="login-card">
        <p className="title">Client Login</p>
        <div className="input-container">
          <p className="input-label">Email</p>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-container">
          <p className="input-label">Password</p>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && <p className="error">{"Error!"}</p>}
        <button
          className="btn"
          disabled={!email || !password}
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;