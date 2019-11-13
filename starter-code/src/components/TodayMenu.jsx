import React from "react";

function TodayMenu({ selection = [], removeFood }) {
  const totalCalories = selection.reduce(
    (acc, food) => (acc += food.quantity * Number(food.calories)),
    0
  );

  return (
    <div>
      <ul>
        {selection.map(({ name, quantity, calories }, i) => (
          <li key={i}>
            <span>
              {quantity} {name} = {quantity * Number(calories)} calories
            </span>
            <button onClick={removeFood(name)} className="button">
              delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Total: {totalCalories}</h2>
      </div>
    </div>
  );
}
export default TodayMenu;
