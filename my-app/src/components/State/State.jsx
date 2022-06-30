import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      increment: 1,
    };
  }
  render() {
    const plus = () => {
      if (this.state.count < 10)
        this.setState({ count: this.state.count + this.state.increment });
    };
    const minus = () => {
      if (this.state.count > 0)
        this.setState({ count: this.state.count - this.state.increment });
    };
    const onChange = ({ target }) => {
      this.setState({ increment: Number(target.value) });
    };
    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <select name="" id="" onChange={onChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </React.Fragment>
    );
  }
}

export default State;
