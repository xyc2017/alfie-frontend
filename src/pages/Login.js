import React, { useState } from "react";
import httpClient from "../httpClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();
    console.log(email, password);

    try {
      const resp = await httpClient.post("/login", {
        email,
        password,
      });
      window.location.href = "/";
    } catch (error) {
      if (error.response.status === 401) {
        alert("Invalid Credentials.");
      }
    }

    event.target.reset();
  };

  return (
    <div>
      <h1>Please Log Into Your Account</h1>
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;