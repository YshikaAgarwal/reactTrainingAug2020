import React, { useContext } from "react";
import ComponentC from "./ComponentC";

import { CountContext } from "./GlobalPage";

const ComponentB = () => {
  const { count } = useContext(CountContext);

  return (
    <div className="treeContainer" style={{ background: "#ff70a6" }}>
      <h3>ComponentB</h3>
      <p>Count:{count}</p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
