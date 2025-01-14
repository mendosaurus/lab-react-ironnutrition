import React, { Component } from "react";
import logo from "./logo.svg";
import foods from "../src/foods.json";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import "bulma/css/bulma.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    myFoods: [...foods],
    open: false,
    todaysFoods: [],
    calTotal: 0
  };

  addFood = e => {
    console.log(e);
    let updateToday = [...this.state.todaysFoods];

    updateToday.push({
      quantity: e.quantity,
      name: e.food.name,
      calories: e.food.calories
    });

    let newCalories =
      this.state.calTotal + Number(e.quantity) * Number(e.food.calories);

    this.setState({
      todaysFoods: updateToday,
      calTotal: newCalories
    });
  };

  deleteThis = i => {
    console.log(this.state.todaysFoods);
    let newFoods = [...this.state.todaysFoods];

    let removed = newFoods.splice(i, 1);

    let newCals =
      this.state.calTotal - removed[0].calories * removed[0].quantity;

    this.setState({
      todaysFoods: newFoods,
      calTotal: newCals
    });
  };

  searchInput = e => {
    console.log(e.target.value);
    let search = e.target.value;
    let filteredFoods = foods.filter(food => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return food;
      }
    });

    this.setState({
      myFoods: filteredFoods
    });
  };

  closeForm = () => {
    let updatedFoods = [...this.state.myFoods];
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };

    updatedFoods.push(newFood);

    this.setState({
      myFoods: updatedFoods,
      open: !this.state.open
    });
  };

  createForm = e => {
    if (this.state.open) {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        open: !this.state.open
      });
    }
  };

  showForm = () => {
    if (this.state.open) {
      return (
        <div>
          <form>
            <div className="form-group" onSubmit={this.closeForm}>
              <div className="control">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Food Name"
                  onChange={this.createForm}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="control">
                <input
                  className="form-control"
                  type="text"
                  name="calories"
                  placeholder="Food Calories"
                  onChange={this.createForm}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="control">
                <input
                  className="form-control"
                  type="text"
                  name="image"
                  placeholder="Food Image"
                  onChange={this.createForm}
                />
              </div>
            </div>
          </form>
          <button onClick={this.closeForm}>Submit New Food</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.createForm}>Add New Food</button>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">IronNutrition</h1>
        </header>
        <Search
          searchInput={e => this.searchInput(e)}
          // searchIt={() => this.searchIt(this.state.search)}
          className="input"
        />
        {this.showForm()}

        <div className="flex-container">
          <div className="foodOptions">
            {this.state.myFoods.map((food, index) => {
              return <FoodBox food={food} key={index} addFood={this.addFood} />;
            })}
          </div>
          <div className="todaysFoods">
            <ul>
              <li>Today's foods</li>
              {this.state.todaysFoods.map((food, i) => {
                return (
                  <li key={i}>
                    {food.quantity} {food.name} ={" "}
                    {food.calories * food.quantity}
                    <button onClick={() => this.deleteThis(i)}>Delete</button>
                  </li>
                );
              })}
              <li id="calTotal">
                total: <span>{this.state.calTotal}</span> cals
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
