import React, { useReducer } from "react";

function loginReducer(state, action) {
  switch (action.type) {
    case "field":
      return { ...state, [action.name]: action.value };
    case "login":
      return { ...state, isLoading: true, error: "" };
    case "success":
      return { ...state, isLoggedIn: true, isLoading: false };
    case "error":
      return {
        ...state,
        error: "Invalid Username Or Password!",
        username: "",
        password: "",
        isLoading: false,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "",
      };

    default:
      return state;
  }
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const LoginWithReducer = ({ login }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, isLoggedIn, error } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (err) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="formContainer">
      <h2>useReducer Form</h2>
      <br />
      <section>
        {isLoggedIn ? (
          <div className="formSection">
            <h1>Hello {username}!</h1>
            <button onClick={() => dispatch({ type: "logout" })}>
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
              onChange={(e) =>
                dispatch({
                  type: "field",
                  name: "username",
                  value: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  name: "password",
                  value: e.target.value,
                })
              }
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

export default LoginWithReducer;
