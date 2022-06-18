import React from "react";

export class State extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      students: [],
      email: "",
      username: "",
      password: "",
      surname: ""
    }
  }
  render(){
    const onSubmit = () => {
      console.log(this.state);
    }
    const onChangeSurname = ({target}) => {
      this.setState({surname: target.value})
    }
    const onChangeName = ({target}) => {
      this.setState({username: target.value})
    }
    const onChangePassword = ({target}) => {
      this.setState({password: target.value})
    }
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <input type="surname" onChange={onChangeSurname} />
        <input type="email" onChange={onChangeName} />
        <input type="password" onChange={onChangePassword} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    )
  }
}