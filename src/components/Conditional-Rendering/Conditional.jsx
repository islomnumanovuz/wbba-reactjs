import React from "react";

export default class Condtional extends React.Component{
  constructor() {
    super()
    this.state = {
      isLoged: false,
      text: "",
      password: ""
    }
    
  }

  // state = {
  //   isLoged: false,
  //   login: "",
  //   password: ""
  // }
  render(){
    const submit = () => {
      if (this.state.text === "webbrain@gmail.com" && this.state.password === "123456"){
        this.setState({isLoged: true})
        alert("Success")
      } else {
        alert("Failed")
      }
    }
    const logout = () => {
      this.setState({isLoged: false})
    }
    /* if (this.state.isLoged) {
      return (
        <React.Fragment>
          <h1>Main Page</h1>
          <button onClick={() => this.setState({isLoged: false})}>Log Out</button>
        </React.Fragment>
      )
    } else {
      return(
        <React.Fragment>
          <h1>Login Page</h1>
          <input type="text" onChange={({target: {value}}) => this.setState({text: value})} value={this.state.text}  />
          <input type="password" onChange={({target: {value}}) => this.setState({password: value})} value={this.state.password}  />
          <button onClick={submit}>Login</button>
        </React.Fragment>
      )
    } */
    return (
      <React.Fragment>
        <h1>{this.state.isLoged ? "Main Page" : "Login Page"}</h1>
        {
          !this.state.isLoged && <>
          <input type="text" onChange={({target: {value}}) => this.setState({text: value})} value={this.state.text}  />
          <input type="password" onChange={({target: {value}}) => this.setState({password: value})} value={this.state.password}  />
          </>
        }
        <button onClick={this.state.isLoged ? logout : submit}>{this.state.isLoged ? "Log out" : "Login"}</button>
      </React.Fragment>
    )
  }
}