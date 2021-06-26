import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <div className="login-card">
                <p className="title">
                   Client Login
                </p>
                <div className="input-container">
                    <p className="input-label">Email</p>
                    <input className="input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="input-container">
                    <p className="input-label">Password</p>
                    <input className="input" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button className="btn" disabled={!email || !password} onClick={() => console.log("click")}>Log In</button>
            </div>
        </div>
    );
}

export default Login;