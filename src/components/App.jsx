import { useState, useReducer, useEffect } from "react";
import SearchForm from "./SearchForm.jsx";
import WeeklyReport from "./WeeklyReport.jsx";
import ScaleSwitch from "./scaleSwitch.jsx";
import "../styles.css";

export default function App() {
  const [forecasts, setForecasts] = useState(() => {
    const localValue = sessionStorage.getItem("forecasts");
    if (!localValue) return {};

    return JSON.parse(localValue);
  });
  const [celsius, toggle] = useReducer((celsius) => !celsius, false);

  useEffect(() => {
    sessionStorage.setItem("forecasts", JSON.stringify(forecasts));
  }, [forecasts]);

  const updateData = (data) => {
    data ? setForecasts(data) : setForecasts({});
  };

  return (
    <>
      <h1 className="header">Weather App</h1>

      <section id="inputSection">
        <SearchForm updateForecasts={updateData} />
        <ScaleSwitch toggle={toggle} />
      </section>
        <WeeklyReport forecastForWeek={forecasts} celsiusToggled={celsius} />
    </>
  );
}