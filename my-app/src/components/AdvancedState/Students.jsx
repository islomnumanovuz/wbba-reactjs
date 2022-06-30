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
    /* const onChangeUsername = ({ target }) => {
      this.setState({ username: target.value });
    };
    const onChangeEmail = ({ target }) => {
      this.setState({ email: target.value });
    };
    const onChangePassword = ({ target }) => {
      this.setState({ password: target.value });
    }; */
    const onChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };
    return (
      <React.Fragment>
        <input name="username" onChange={onChange} type="username" />
        <input name="email" onChange={onChange} type="email" />
        <input name="password" onChange={onChange} type="password" />

        <button onClick={onSubmit}>Submit</button>
      </React.Fragment>
    );
  }
}

export default State;
