import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div className="treeContainer" style={{ background: "#70d6ff" }}>
      <h3>ComponentA</h3>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
