import React from "react";
// import ReactDOM from "react-dom/client"
// import home1 from "../../assets/images/home-image-1.jpg"

export default class Button extends React.Component{
  // constructor(){
  //   super()
  // }
  render(){
    return (
      <>
        <button className="btn">{this.props.children}</button>
      </>
    )
  }
}