import React from "react";
import LoginWithState from "../login/LoginWithState";
import LoginWithReducer from "../login/LoginWithReducer";

const LoginPage = () => {
  const login = ({ username, password }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "abhay" && password === "password") resolve();
        else reject();
      }, 1000);
    });

  return (
    <>
      <h1 align="center">LoginPage</h1>
      <hr />
      <div className="container" style={{ minHeight: "80vh" }}>
        <LoginWithState login={login} />
        <LoginWithReducer login={login} />
      </div>
    </>
  );
};

export default LoginPage;
