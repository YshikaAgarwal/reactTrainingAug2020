import React, { useState, createContext } from "react";
import ComponentA from "../global/ComponentA";

export const CountContext = createContext();

const GlobalPage = () => {
  const [count, setCount] = useState(1);

  const incCount = () => setCount((c) => c + 1);
  const decCount = () => setCount((c) => c - 1);
  return (
    <CountContext.Provider value={{ count, incCount, decCount }}>
      <div
        className="container"
        style={{ flexDirection: "column", background: "#ffd670" }}
      >
        <h1>GlobalPage with Count: {count}</h1>
        <ComponentA />
      </div>
    </CountContext.Provider>
  );
};

export default GlobalPage;
