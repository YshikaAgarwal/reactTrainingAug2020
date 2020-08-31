import React from "react";
import FormUsingState from "./FormUsingState";
import FormUsingRef from "./FormUsingRef";

const FormRef = () => {
  return (
    <>
      <p align="center">Open console to see logs</p>
      <div className="container" style={{ minHeight: "80vh" }}>
        <FormUsingState />
        <FormUsingRef />
      </div>
    </>
  );
};

export default FormRef;
