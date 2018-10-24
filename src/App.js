import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Calculator />
      </div>
    );
  }
}

export default App;
