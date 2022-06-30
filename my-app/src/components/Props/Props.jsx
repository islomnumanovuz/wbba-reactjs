import React, { Component } from "react";

class Props extends Component {
  render() {
    // console.log(this.props.name);
    return (
      <div>
        Props {this.props?.name}
        {this.props.children}
      </div>
    );
  }
}

export default Props;
