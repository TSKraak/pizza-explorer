// src/components/AddPizzaForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddPizzaForm.scss";

const randomId = Math.floor(Math.random() * 100 + 1);

export default function AddPizzaForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch(); // placed inside the function of a component

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    console.log("new pizza:", name, description);

    // TODO:
    // - dispatch the ADD_PIZZA action
    // - clear the input fields

    dispatch({
      type: "ADD_PIZZA",
      payload: {
        id: randomId,
        name: name,
        description: description,
      },
    });

    setName("");
    setDescription("");
  };

  return (
    <form className="pizza-form" onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit" onClick={submit}>
          Add this pizza!
        </button>
      </p>
    </form>
  );
}
