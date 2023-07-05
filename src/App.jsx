import { useState } from "react";
import SearchForm from "./components/SearchForm.jsx";
import WeeklyReport from "./components/WeeklyReport.jsx";
import "./styles.css";

export default function App() {
  const [forecasts, setForecasts] = useState({});

  function updateData(data) {
    data ? setForecasts(data) : setForecasts({});
  }

  return (
    <>
      <h1 className="header">Weather App</h1>

      <SearchForm updateForecasts={updateData} />
      <WeeklyReport forecastForWeek={forecasts}/>
    </>
  );
}