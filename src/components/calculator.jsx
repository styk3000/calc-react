import React, { Component } from "react";
// import Button from "./button";

class Calculator extends Component {
  state = { result: 0, first: true, display: "0", lastOper: "" };

  handleClickedNr = keyNr => {
    if (this.state.first) {
      this.setState({ first: false, display: keyNr });
    } else {
      let { display } = this.state;
      display += String(keyNr);
      this.setState({ display: display });
    }
  };
  handlePoint = () => {
    console.log(".");
  };
  handleEqual = () => {
    console.log("equal");
    let { display, result, lastOper } = this.state;
    if (lastOper === "") {
      console.log("zadnych wczesniejszych operacji");
    } else if (lastOper === "+") {
      result += parseInt(display);
      display = result;
      lastOper = "=";
    } else if (lastOper === "-") {
      result -= parseInt(display);
      display = result;
      lastOper = "=";
    } else if (lastOper === "x") {
      result *= parseInt(display);
      display = result;
      lastOper = "=";
    } else if (lastOper === "/") {
      result /= parseInt(display);
      display = result;
      lastOper = "=";
    }
    this.setState({
      first: true,
      result: result,
      display: display,
      lastOper: lastOper
    });
  };

  handleOperation = kind => {
    let { lastOper, display } = this.state;
    if (lastOper === "" || lastOper === "=") {
      if (display !== "") {
        let result = this.state.result;
        if (result === 0) {
          result += parseInt(display);
        }
        display = "";
        this.setState({
          display: display,
          result: result,
          lastOper: kind
        });
        console.log(kind);
      }
    } else {
      this.handleEqual();
    }

    // console.log(result);
  };

  render() {
    return (
      <div className="container">
        <h1>Wynik: {this.state.display}</h1>
        <div>
          <div>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(1)}
            >
              1
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(2)}
            >
              2
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(3)}
            >
              3
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleOperation("+")}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(4)}
            >
              4
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(5)}
            >
              5
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(6)}
            >
              6
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleOperation("-")}
            >
              -
            </button>
          </div>
          <div>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(7)}
            >
              7
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(8)}
            >
              8
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(9)}
            >
              9
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleOperation("x")}
            >
              x
            </button>
          </div>
          <div>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleClickedNr(0)}
            >
              0
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleOperation("/")}
            >
              /
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handlePoint()}
            >
              .
            </button>
            <button
              className="button btn btn-lg m-2 btn-danger"
              onClick={() => this.handleEqual()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
