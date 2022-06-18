import React from "react";

export class State extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      students: [],
      email: "",
      password: "",
      surname: ""
    }
  }
  render(){
    const onSubmit = () => {
      console.log(this.state);
    }
    const onChange = ({target}) => {
      this.setState({[target.name]: target.value})
    }
    return(
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1>{this.state.surname}</h1>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>

        <input name="surname" value={this.state.surname} type="surname" onChange={onChange} />
        <input name="email" value={this.state.email} type="email" onChange={onChange} />
        <input name="password" value={this.state.password} type="password" onChange={onChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    )
  }
}