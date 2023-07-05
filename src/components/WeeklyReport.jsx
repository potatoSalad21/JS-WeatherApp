import WeekDay from "./WeekDay";

export default function WeeklyReport({ forecastForWeek, celsiusToggled }) {
  return (
    <ul className="dailyForecast">
      {Object.keys(forecastForWeek).length === 0 && "* Enter a valid city name."}
      {Object.keys(forecastForWeek).map((day) => {
        return (
          <WeekDay
            key={crypto.randomUUID()}
            forecastForDay={forecastForWeek[day]}
            celsiusToggled={celsiusToggled}
          />
        );
      })}
    </ul>
  );
}