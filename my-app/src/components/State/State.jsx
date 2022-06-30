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
    this.state = {};
  }
  render() {
    /* 
    React event handlers are written inside curly braces:
    onClick={shoot}  instead of onClick="shoot()"
    */
    return <button onClick={console.log("1")}>State</button>;
  }
}

export default State;
