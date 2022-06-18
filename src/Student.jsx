import React from "react";

export class Student extends React.Component{
  constructor(){
    super()
    this.state = {
      count: 1,
      increment: 1
    }
  }
  render() {
    const plus = () => {
      this.setState({
        count: this.state.count + this.state.increment
      })
    }
    const minus = () => {
      this.setState({
        count: this.state.count - this.state.increment
      })
    }
    const onChange = (e) => {
      // console.log(e.target.value);
      this.setState({increment: Number(e.target.value)})
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <select name="" id="" onChange={onChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}