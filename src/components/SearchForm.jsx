import axios from "axios";
import { useState } from "react";

export default function SearchForm({ updateForecasts }) {
  const [cityName, setCityName] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const cityLocation = await axios.get(
          "http://dataservice.accuweather.com/locations/v1/cities/search",
          { params: { apikey: "UTl8ox7GNKZRazvqAO1XcQnHVuUyP7Gq", q: cityName } }
        );
        const cityKey = cityLocation.data[0].Key;

        const weatherJson = await axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`,
          { params: { apikey: "UTl8ox7GNKZRazvqAO1XcQnHVuUyP7Gq" } }
        );
        const forecasts = weatherJson.data.DailyForecasts;
        updateForecasts(forecasts);
      } catch (error) {
        console.error(error);
      }
    } 
    fetchData();
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="searchBar"
          type="text"
          placeholder="city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <input className="button" type="submit" value="Search" />
      </form>
    </>
    
  );
}