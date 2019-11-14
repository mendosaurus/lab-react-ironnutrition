import React, { Component } from "react";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import { FoodList, FoodForm, Search } from "./components";

class App extends Component {
  state = {
    foods,
    filteredFoods: foods,
    formActive: false,
    selection: []
  };

  createFood = formData => {
    const { foods } = this.state;
    const newFoodList = [...foods, formData];
    this.setState({ foods: newFoodList, filteredFoods: newFoodList });
  };

  toggleFoodForm = () => this.setState({ formActive: !this.state.formActive });

  handleSearch = e => {
    const { foods } = this.state;
    const searchInput = e.target.value;
    if (!searchInput) return this.setState({ filteredFoods: foods });
    const filteredFoods = foods.filter(food =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.setState({ filteredFoods });
  };

  increaseQuantity = e => {
    // const { filteredFoods } = this.state;
    // const newFoodList = filteredFoods.map(food =>
    //   food.name.toLowerCase() === food.name.toLowerCase()
    //     ? { ...food, quantity: e.target.value }
    //     : food
    // );
    // this.setState({ filteredFoods: newFoodList });
  };

  addFood = name => {
    console.log(this.state);

    let selection = [...this.state.selection];
    let filteredFoods = [...this.state.filteredFoods];
    console.log(name, filteredFoods, selection);

    const selectedFood = filteredFoods.find(
      food => food.name.toLowerCase() === name.toLowerCase()
    );
    console.log("090909090", selectedFood);
    selection.unshift(selectedFood);
    console.log(selection);

    this.setState({
      selection: selection
    });

    console.log(this.state);

    // const validation = selection.find(
    //   food => selectedFood.name.toLowerCase() === food.name.toLowerCase()
    // );
    // console.log(validation);
    // const newSelection = validation
    //   ? selection.map(food =>
    //       food.name.toLowerCase() === selectedFood.name.toLowerCase()
    //         ? selectedFood
    //         : food
    //     )
    //   : [selectedFood, ...selection];
    // this.setState({ selection: newSelection });
  };

  removeFood = name => {
    console.log("in remove");
    const { selection } = this.state;
    const newSelection = selection.filter(
      food => name.toLowerCase() !== food.name.toLowerCase()
    );
    this.setState({ selection: newSelection });
  };

  render() {
    const { filteredFoods, formActive, selection } = this.state;
    return (
      <div className="App">
        <div className="navbar">
          <h1 className="title">IronNutrition</h1>
        </div>
        <div className="section">
          <Search handleSearch={this.handleSearch} />
          <button onClick={this.toggleFoodForm} className="button is-info">
            Add More
          </button>
          {formActive && <FoodForm createFood={this.createFood} />}
        </div>
        <div className="section">
          <FoodList
            foods={filteredFoods}
            increaseQuantity={this.increaseQuantity}
            selection={selection}
            addFood={this.addFood}
            removeFood={this.removeFood}
          />
        </div>
      </div>
    );
  }
}

export default App;
