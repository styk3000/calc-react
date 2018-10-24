import React, { Component } from "react";
class Button extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onMath(this.props.value)}
        className="button btn btn-sm m-2 btn-danger"
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
