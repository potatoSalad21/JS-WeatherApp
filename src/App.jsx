import { useState } from "react";
import SearchForm from "./components/SearchForm.jsx";
import "./styles.css";

export default function App() {
  const [forecasts, setForecasts] = useState({});

  function updateData(data) {
    if (data) {
      setForecasts(data);
    }
  }

  return (
    <>
      <h1 className="header">Weather App</h1>

      <SearchForm data={forecasts} updateForecasts={updateData} />

      <ul className="dailyForecast">
        <li className="weekDay">day 1</li>
        <li className="weekDay">day 2</li>
        <li className="weekDay">day 3</li>
        <li className="weekDay">day 4</li>
        <li className="weekDay">day 5</li>
      </ul>
    </>
  );
}