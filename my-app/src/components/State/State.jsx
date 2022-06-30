import React, { Component } from "react";

class State extends Component {
  /* 
 The constructor method is a special method:
  It has to have the exact name "constructor"
  It is executed automatically when a new object is created
  It is used to initialize object properties
  */
  /* 
    The super() method refers to the parent class.

      By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    */
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    /* 
    React event handlers are written inside curly braces:
    onClick={shoot}  instead of onClick="shoot()"
    */

    const plus = () => {
      if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    };
    return (
      <React.Fragment>
        <h1>{this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </React.Fragment>
    );
  }
}

export default State;
