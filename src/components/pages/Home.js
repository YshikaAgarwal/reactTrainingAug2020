import React, { useState } from "react";
import ClassForm from "../ClassForm";
import FunctionForm from "../FunctionForm";

const Home = () => {
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(true);

  const [todos, setTodos] = useState([
    "Get Up in morning",
    "Buy Milk",
    "Have Breakfast",
  ]);

  const addTodo = (todo) => setTodos([todo, ...todos]);
  return (
    <div className="container">
      <section className="formContainer">
        <p>Show Component : {display ? "Yes" : "No"}</p>
        <button onClick={() => setDisplay((d) => !d)}>ToggleDisplay</button>
        <hr />
        {display && <ClassForm />}
      </section>
      <section className="formContainer">
        <p>Show Component : {display2 ? "Yes" : "No"}</p>
        <button onClick={() => setDisplay2((d) => !d)}>ToggleDisplay</button>
        <hr />
        {display2 && <FunctionForm todos={todos} addTodo={addTodo} />}
      </section>
    </div>
  );
};

export default Home;
