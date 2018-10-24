import React, { Component } from "react";
import Button from "./button";

class Calculator extends Component {
  state = { result: 0, first: true, display: 0, actualOper: "none" };

  displayNr = keyNr => {
    let display = this.state.display;
    let result = this.state.result;
    if (keyNr === "+") {
      //reset display onononono toronto
      let result = this.state.result + this.state.display;
      this.setState({ result: result, display: 0 });
      console.log("dodawanie" + result);
    } else if (keyNr === "-") {
      console.log("odejmowanie");
    } else if (keyNr === "=") {
      console.log("wynik");
    } else {
      if (this.state.first) {
        display = "";
        let first = !this.state.first;
        this.setState({ first: first });
      }

      display += keyNr;
      this.setState({ display: display });
      // console.log(keyNr);
    }
  };

  render() {
    return (
      <div className="container">
        <span>Wynik: {this.state.display}</span>
        <div>
          <Button onMath={this.displayNr} value="1" />
          <Button onMath={this.displayNr} value="2" />
          <Button onMath={this.displayNr} value="3" />
        </div>
        <div>
          <Button onMath={this.displayNr} value="+" />
          <Button onMath={this.displayNr} value="-" />
          <Button onMath={this.displayNr} value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
