import React from "react";
import ComponentD from "./ComponentD";

const ComponentC = () => {
  return (
    <div className="treeContainer" style={{ background: "#e9ff70" }}>
      <h3>ComponentC</h3>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
