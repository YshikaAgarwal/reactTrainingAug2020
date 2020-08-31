import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      lifeCycleEvents: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.counter === this.state.counter) return false;
    return true;
  }

  componentDidMount() {
    this.setState({
      lifeCycleEvents: [
        ...this.state.lifeCycleEvents,
        "Class : componentDidMount",
      ],
    });
  }

  componentDidUpdate() {
    console.log("Class : componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Class : componentWillUnmount");
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("Rerendered ClassForm");
    return (
      <div>
        <h1>Form Class Based</h1>
        <p>Counter : {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
        <br />
        <ul>
          {this.state.lifeCycleEvents.map((event, idx) => (
            <li key={idx}>{event}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassForm;
