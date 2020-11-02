import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Pizzalist.scss";

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

const selectIngredients = (reduxState) => {
  const IngredientsPerPizza = [...reduxState.pizzas].map(
    (pizza) => pizza.ingredients
  );
  const allIngredients = [].concat.apply([], IngredientsPerPizza);
  return [...new Set(allIngredients)];
};

const selectDarkMode = (reduxState) => {
  return reduxState.user.darkMode;
};

export default function Pizzalist() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const favorites = useSelector(selectFavorites);
  const ingredients = useSelector(selectIngredients);
  const darkMode = useSelector(selectDarkMode);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch(); // placed inside the function of a component
  //   console.log(ingredients);
  //   console.log("FILTER", filter);

  const setIngredient = (e) => setFilter(e.target.value);

  const filteredPizzas = pizzas.filter((pizza) => {
    if (!filter) {
      return true;
    }
    return pizza.ingredients.includes(filter);
  });

  const setDarkMode = (e) =>
    dispatch({ type: "TOGGLE_DARK_MODE", payload: e.target.value });
  //   console.log("DARKMODE", darkMode);

  return (
    <div>
      <h1 className="explorer-header">Pizza Explorer</h1>
      <p>
        Hi <strong>{user.name}</strong>! You have {user.favorites.length}{" "}
        favorite pizzas
      </p>
      <h4>We have {pizzas.length} different pizzas available.</h4>
      <select onChange={setIngredient}>
        <option value="">Pick a ingredient</option>

        {ingredients.map((ingredient) => (
          <option key={ingredient} value={ingredient}>
            {ingredient}
          </option>
        ))}
      </select>

      <select value={darkMode} onChange={setDarkMode}>
        <option value={false}>Darkmode off</option>
        <option value={true}>Darkmode on</option>
      </select>

      <p>The complete list of pizzas:</p>
      <div className="pizzas-container">
        {filteredPizzas.map((pizza) => (
          <div className="one-pizza-container" key={pizza.name}>
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className="pizza-image"
            ></img>
            <div className="one-pizza-text">
              <strong>{pizza.name}</strong>
              <br></br> Description: {pizza.description} <br></br>Times bought:{" "}
              {pizza.bought}
            </div>
            <button
              className="favorite-button"
              onClick={() =>
                dispatch({ type: "TOGGLE_FAVORITE_PIZZA", payload: pizza.id })
              }
            >
              {favorites.includes(pizza.id) ? "\uD83D\uDC96" : "\uD83D\uDDA4"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
