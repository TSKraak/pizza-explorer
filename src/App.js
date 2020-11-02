import React from "react";
import "./App.scss";
import AddPizzaForm from "./components/AddPizzaForm";
import Pizzalist from "./components/Pizzalist";
import { useSelector } from "react-redux";

const selectDarkMode = (reduxState) => {
  return reduxState.user.darkMode;
};

function App() {
  const darkMode = useSelector(selectDarkMode);
  const toggleDarkMode = darkMode ? "darkModeOn" : "darkModeOff";

  return (
    <div className={toggleDarkMode}>
      <div className="App">
        <Pizzalist />
        <AddPizzaForm />
      </div>
    </div>
  );
}

export default App;
