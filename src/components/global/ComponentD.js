import React, { useContext } from "react";

import { CountContext } from "../pages/GlobalPage";

const ComponentD = () => {
  const { count, incCount, decCount } = useContext(CountContext);

  return (
    <div className="treeContainer" style={{ background: "#ff9770" }}>
      <h3>ComponentD</h3>
      <p>Count: {count}</p>
      <button onClick={incCount}>Inc Count</button>
      <button onClick={decCount}>Dec Count</button>
    </div>
  );
};

export default ComponentD;
