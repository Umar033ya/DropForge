import React, { useState } from 'react';
import './Login.css';
import df from '../../../public/DF.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  // Register form submit
  const registerForm = async (e) => {
    e.preventDefault(); // sahifa refresh bo‘lishini to‘xtatadi
    const registerData = {
      users: [
        {
          name: name,
          email: email,
          password: password,
          so2id: id,
          coin: 10
        }
      ]
    };

    try {
      const res = await axios.post(
        "https://www.npoint.io/docs/6404427173fedb3ae6b3",
        registerData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("User registered:", res.data);
      alert("Registration successful!");
      setRegister(false);
    } catch (error) {
      console.log(error);
      alert("Error during registration!");
    }
  };

  const loginForm = (e) => {
    e.preventDefault();
    alert("Login functionality not implemented yet!");
  };

  return (
    <main className="login-page">
      {register ? (
        <section className="login-card">
          <div className="avatar-area">
            <img className="avatar" src={df} alt="Register avatar" />
          </div>

          <form onSubmit={registerForm} className="login-form">
            <h1 className="brand">Register</h1>

            <label className="field">
              <span className="label-text">Username</span>
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>

            <label className="field">
              <span className="label-text">Email</span>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label className="field">
              <span className="label-text">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label className="field">
              <span className="label-text">SO2 ID</span>
              <input
                type="text"
                placeholder="Enter SO2 ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="btn">Register</button>

            <div className="aux-links">
              <p className="link1" onClick={() => setRegister(false)}>
                Back to Login
              </p>
            </div>
          </form>
        </section>
      ) : (
        <section className="login-card">
          <div className="avatar-area">
            <img className="avatar" src={df} alt="Your avatar" />
          </div>

          <form className="login-form" onSubmit={loginForm}>
            <h1 className="brand">Drop Forge</h1>

            <label className="field">
              <span className="label-text">Username or Email</span>
              <input
                type="text"
                placeholder="Enter your name or email"
                required
              />
            </label>

            <label className="field">
              <span className="label-text">Password</span>
              <input
                type="password"
                placeholder="••••••••"
                required
              />
            </label>

            <button type="submit" className="btn">Login</button>

            <div className="aux-links">
              <p className="link1">Don't you have an account </p>
              <span className="sep">•</span>
              <p className="link" onClick={() => setRegister(true)}>
                Register
              </p>
            </div>
          </form>
        </section>
      )}
    </main>
  );
}

export default Login;
