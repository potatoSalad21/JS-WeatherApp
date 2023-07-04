import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1 className="header">Weather App</h1>
      <form>
        <input
          className="searchBar"
          type="text"
          placeholder="city name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input className="btn" type="submit" value="Search" />
      </form>
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