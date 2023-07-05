import { useState, useReducer } from "react";
import SearchForm from "./components/SearchForm.jsx";
import WeeklyReport from "./components/WeeklyReport.jsx";
import ScaleSwitch from "./components/scaleSwitch.jsx";
import "./styles.css";

export default function App() {
  const [forecasts, setForecasts] = useState({});
  const [celsius, toggle] = useReducer((celsius) => !celsius, false);

  function updateData(data) {
    data ? setForecasts(data) : setForecasts({});
  }

  return (
    <>
      <h1 className="header">Weather App</h1>

      <SearchForm updateForecasts={updateData} />
      <ScaleSwitch toggle={toggle} />
      <WeeklyReport forecastForWeek={forecasts} celsiusToggled={celsius} />
    </>
  );
}