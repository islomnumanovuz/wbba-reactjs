import React from 'react';
import react from "../../assets/Image/react.png";
import typescript from "../../assets/Image/typescript.png"
import {ReactComponent as Icon} from "../../assets/car-image.svg"


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoged: false
    };
  }
  render() {
    const toggleImg = () => {
      this.setState({isLoged: !this.state.isLoged})
    }
    return (
      <>
        <img width={"500"} src={this.state.isLoged ? react : typescript} alt="img" />
        
        <button onClick={toggleImg}>Change</button>
        <div>
          <Icon/>
        </div>
      </>
    );
  }
}


export default Image;
