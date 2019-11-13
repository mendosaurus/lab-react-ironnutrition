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

  increaseQuantity = (name = String()) => e => {
    const { filteredFoods } = this.state;
    const newFoodList = filteredFoods.map(food =>
      name.toLowerCase() === food.name.toLowerCase()
        ? { ...food, quantity: e.target.value }
        : food
    );
    this.setState({ filteredFoods: newFoodList });
  };

  addFood = (name = String()) => _ => {
    const { filteredFoods, selection } = this.state;
    const selectedFood = filteredFoods.find(
      food => food.name.toLowerCase() === name.toLowerCase()
    );
    const validation = selection.find(
      food => selectedFood.name.toLowerCase() === food.name.toLowerCase()
    );
    const newSelection = validation
      ? selection.map(food =>
          food.name.toLowerCase() === selectedFood.name.toLowerCase()
            ? selectedFood
            : food
        )
      : [selectedFood, ...selection];
    this.setState({ selection: newSelection });
  };

  removeFood = name => _ => {
    const { selection } = this.state;
    const newSelection = selection.filter(
      food => name.toLowerCase() === food.name.toLowerCase()
    );
    this.setState({ selection: newSelection });
  };

  render() {
    const { filteredFoods, formActive, selection } = this.state;
    return (
      <div className="App">
        <h1 className="title">IronNutrition</h1>
        <Search handleSearch={this.handleSearch} />
        <button onClick={this.toggleFoodForm} className="button is-info">
          Add More
        </button>
        {formActive && <FoodForm createFood={this.createFood} />}
        <FoodList
          foods={filteredFoods}
          increaseQuantity={this.increaseQuantity}
          selection={selection}
          addFood={this.addFood}
          removeFood={this.removeFood}
        />
      </div>
    );
  }
}

export default App;
