import React, { useState } from "react";

const FormUsingState = () => {
  console.log("Rendering Form State");
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("State Form Submitted with :" + name);
  };

  return (
    <div className="formContainer">
      <h2>Form Using State</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Your Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="FullName"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormUsingState;
