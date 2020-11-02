import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  function compareBought(pizzaA, pizzaB) {
    return pizzaB["bought"] - pizzaA["bought"];
  }

  return [...reduxState.pizzas].sort(compareBought);
};

const selectFavorites = (reduxState) => {
  return reduxState.user.favorites;
};

export default function Pizzalist() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch(); // placed inside the function of a component

  return (
    <div>
      <h2>Pizza Explorer</h2>
      <p>
        Hi <strong>{user.name}</strong>! You have {user.favorites.length}{" "}
        favorite pizzas
      </p>
      <h4>We have {pizzas.length} different pizzas available.</h4>
      <p>The complete list of pizzas:</p>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.name}>
            <strong>{pizza.name}</strong>
            <br></br> Description: {pizza.description} <br></br>Times bought:{" "}
            {pizza.bought} <br></br>Favorite:{" "}
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_FAVORITE_PIZZA", payload: pizza.id })
              }
            >
              {favorites.includes(pizza.id) ? "\uD83D\uDC96" : "\uD83D\uDDA4"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
