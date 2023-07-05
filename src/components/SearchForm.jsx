import axios from "axios";
import { useState } from "react";

export default function SearchForm({ data, updateForecasts }) {
  const [cityName, setCityName] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const cityLocation = await axios.get(
          "http://dataservice.accuweather.com/locations/v1/cities/search",
          { params: { apikey: "QybnM0n3fiE9MdI0PgsphdJ5pnIlQQZK", q: cityName } }
        );
        const cityKey = cityLocation.data[0].Key;

        const weatherJson = await axios.get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}`,
          { params: { apikey: "QybnM0n3fiE9MdI0PgsphdJ5pnIlQQZK" } }
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
    <form onSubmit={handleSearch}>
      <input
        className="searchBar"
        type="text"
        placeholder="city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <input className="button" type="submit" value="Search" />
      <div className="testing">{data[0]?.Temperature.Maximum.Value}</div>
    </form>
  );
}