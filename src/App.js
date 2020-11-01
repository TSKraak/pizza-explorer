import React from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import Pizzalist from "./components/Pizzalist";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Pizzalist />
      <AddPizzaForm />
    </div>
  );
}

export default App;
