import React from "react";
import { FoodBox, TodayMenu } from "../components";

function FoodList({
  foods = [],
  increaseQuantity,
  selection,
  addFood,
  removeFood
}) {
  return (
    <div className="food-list-container columns">
      <div className="food-list column">
        {foods.map((food, i) => (
          <FoodBox
            {...food}
            increaseQuantity={increaseQuantity}
            addFood={addFood}
            key={i}
          />
        ))}
      </div>
      <div className="today-food column content">
        <h2 className="subtitle">Today's Food</h2>
        <TodayMenu selection={selection} removeFood={removeFood} />
      </div>
    </div>
  );
}

export default FoodList;
