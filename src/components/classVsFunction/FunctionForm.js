import React, { useState } from "react";

const FunctionForm = ({ todos, addTodo }) => {
  console.log("Rendering FunctionForm");
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <h1>Form Function Based</h1>
      {/* <p>Counter : {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <br /> */}
      <p>Add Todo : </p>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <br />
      <button onClick={handleAddTodo}>AddTodo To List</button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

function arePropsEqual(nextProps, prevProps) {
  return (
    nextProps.todos.length === prevProps.todos.length &&
    nextProps.todos.every((todo, idx) => todo === prevProps.todos[idx])
  );
}

export default React.memo(FunctionForm, arePropsEqual);
