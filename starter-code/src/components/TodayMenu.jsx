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
            <button onClick={e => removeFood(name)} className="button">
              delete
            </button>
            {/* <button onClick={removeFood(name)} className="button">  bad way because it calls immediately on load*/}
            {/* <button onClick={removeFood} className="button"> good way also*/}
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
