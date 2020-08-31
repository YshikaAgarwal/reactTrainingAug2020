import React, { Component } from "react";

export class FormUsingRef extends Component {
  fields = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, amount, petType } = this.fields;
    const { size, course } = this.form;
    console.log("course nodes", course);
    const selectedCourses = Array.prototype.slice
      .call(course) // converts to array
      .filter((i) => i.checked) // filters checked node
      .map((i) => i.value); // gets the data of checked node

    console.log(
      fullName.value,
      amount.value,
      petType.value,
      size.value,
      selectedCourses
    );
  };

  render() {
    console.log("Rendering Form Ref");
    return (
      <div className="formContainer">
        <h2>Form Using Ref</h2>
        <hr />
        <form onSubmit={this.handleSubmit} ref={(f) => (this.form = f)}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="FullName"
              ref={(input) => (this.fields.fullName = input)}
            />
          </div>
          <div className="form-group">
            <label>Cash Money</label>
            <input
              type="number"
              placeholder="Amount"
              ref={(cashMoney) => (this.fields.amount = cashMoney)}
            />
          </div>
          <div className="form-group">
            <label>Pet Type</label>
            <select
              name="petType"
              ref={(select) => (this.fields.petType = select)}
            >
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="ferret">Ferret</option>
            </select>
          </div>
          <RadioSet
            setName={"size"}
            setOptions={["small", "medium", "large"]}
          />
          <CheckboxSet setName={"course"} setOptions={["C", "C++", "JAVA"]} />
          <button type="submit">Submit</button>
        </form>
        <aside>
          <p>
            Note: When No real-time validation or input dependency in form is
            required, use refs instead of states
          </p>
        </aside>
      </div>
    );
  }
}

function RadioSet({ setName, setOptions }) {
  return (
    <div>
      {setOptions.map((option) => {
        return (
          <label
            key={option}
            style={{ textTransform: "capitalize", marginRight: "16px" }}
          >
            {option}
            <input type="radio" value={option} name={setName} />
          </label>
        );
      })}
    </div>
  );
}

function CheckboxSet({ setName, setOptions }) {
  return (
    <div>
      {setOptions.map((option) => {
        return (
          <label
            key={option}
            style={{ textTransform: "capitalize", marginRight: "16px" }}
          >
            {option}
            <input type="checkbox" value={option} name={setName} />
          </label>
        );
      })}
    </div>
  );
}

export default FormUsingRef;
