export default function WeekDay({ forecastForDay }) {
  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  
  console.dir(forecastForDay)
  let date = new Date(forecastForDay.Date);
  const day = weekDays[date.getDay()];
  
  const dayPhrase = forecastForDay.Day.IconPhrase;

  let maxTemp = Math.round((forecastForDay.Temperature.Maximum.Value - 32) * 5 / 9);
  let minTemp = Math.round((forecastForDay.Temperature.Minimum.Value - 32) * 5 / 9);

  return (
    <li className="weekDay">
      <div className="info">
        <span>{day}</span>
        <div className="temp">{maxTemp}°/{minTemp}°</div>
      </div>
      <span className="phrase">{dayPhrase}</span>
    </li>
  );
}