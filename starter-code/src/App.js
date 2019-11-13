import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     usr: null,
  //     newPassword: "",
  //     newUsername: ""
  //   };
  // }

  render() {
    return <FoodBox />;
  }
}

export default App;
