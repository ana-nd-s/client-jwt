import React, { useState } from "react";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    fetch(`https://fd86d4cca079.ngrok.io/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((result) => {
        console.log({result})
        history.push("/home");
      })
      .catch((error) => {
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
