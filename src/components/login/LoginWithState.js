import React, { useState } from "react";

const LoginWithState = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");
    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (err) {
      setError("Invalid Username Or Password!");
      setUsername("");
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <h2>useState Form</h2>
      <br />
      <section>
        {isLoggedIn ? (
          <div className="formSection">
            <h1>Hello {username}!</h1>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setUsername("");
                setPassword("");
                setError("");
              }}
            >
              Log Out
            </button>
          </div>
        ) : (
          <form className="formSection" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <h4 align="center">Please Login!</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loggin In..." : "Log In"}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default LoginWithState;
