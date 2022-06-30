import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      username: "",
      email: "",
      password: "",
    };
  }
  render() {
    const onSubmit = () => {
      console.log(this.state);
    };
    const onChangeUsername = ({ target }) => {
      this.setState({ username: target.value });
    };
    const onChangeEmail = ({ target }) => {
      this.setState({ email: target.value });
    };
    const onChangePassword = ({ target }) => {
      this.setState({ password: target.value });
    };
    return (
      <React.Fragment>
        <input onChange={onChangeUsername} type="username" />
        <input onChange={onChangeEmail} type="email" />
        <input onChange={onChangePassword} type="password" />

        <button onClick={onSubmit}>Submit</button>
      </React.Fragment>
    );
  }
}

export default State;
