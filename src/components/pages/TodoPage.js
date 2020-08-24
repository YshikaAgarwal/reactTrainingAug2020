import React, {
  useState,
  useReducer,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

const TodoContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case "reset":
      return action.payload || [];
    case "add":
      return [...state, { id: Date.now(), text: "", completed: false }];
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    case "edit":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    case "completed":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
}

function useEffectOnce(cb) {
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
}

const TodoPage = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffectOnce(() => {
    const rawData = localStorage.getItem("todoData");
    dispatch({ type: "reset", payload: JSON.parse(rawData) });
  });

  useEffect(() => localStorage.setItem("todoData", JSON.stringify(state)), [
    state,
  ]);

  return (
    <TodoContext.Provider value={dispatch}>
      <div className="container">
        <div className="formContainer" style={{ width: "500px" }}>
          <h1>Todos App</h1>
          <hr />
          <button onClick={() => dispatch({ type: "add" })}>Add Todo</button>
          <br />
          <br />
          <TodosList items={state} />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

const TodosList = ({ items }) => {
  return (
    !!items &&
    items.map((item) => <TodoItem key={item.id} item={item} {...item} />)
  );
};

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useContext(TodoContext);
  const [todoText, setTodoText] = useState(text);

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <div className="todoInputContainer">
        <input
          type="text"
          value={todoText}
          placeholder="Enter a task..."
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: "edit", payload: { id, text: todoText } })
          }
        >
          +
        </button>
      </div>
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
};

export default TodoPage;
