import React from "react";
import { useSelector } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  function compareBought(pizzaA, pizzaB) {
    return pizzaB["bought"] - pizzaA["bought"];
  }

  return [...reduxState.pizzas].sort(compareBought);
};

export default function Pizzalist() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h2>Pizza Explorer</h2>
      <p>
        Hi <strong>{user.name}</strong>! Your {pizzas.length} favorite pizzas:
      </p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.name}>
            <strong>{pizza.name}</strong>
            <br></br> Description: {pizza.description} <br></br>Times bought:{" "}
            {pizza.bought}
          </li>
        ))}
      </ul>
      <p>TODO: the list of pizzas</p>
    </div>
  );
}
