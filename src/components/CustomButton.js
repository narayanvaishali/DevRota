import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";

class CustomButton extends Component {
  render() {
    const { onPress, children } = this.props;

    return (
      <button type="button" onClick={onPress}>
        {children}
      </button>
    );
  }
}
export default CustomButton;

/*class ChangeInput extends Component {
  handleEvent = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <CustomButton onPress={this.handleEvent}>Click on me</CustomButton>
      </div>
    );
  }
}

export default ChangeInput;*/

//const rootElement = document.getElementById("root");
//ReactDOM.render(<ChangeInput />, rootElement);
