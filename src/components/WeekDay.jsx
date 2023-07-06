import sunnyLogo from "../assets/day.svg";
import cloudyLogo from "../assets/cloudy-day.svg";
import stormLogo from "../assets/thunder.svg";
import rainLogo from "../assets/rainy.svg";
import showersLogo from "../assets/showers.svg";

export default function WeekDay({ forecastForDay, celsiusToggled }) {
  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const convertToCel = (temp) => {
    return Math.round((temp - 32) * 5 / 9);
  };

  const dayPhrase = forecastForDay.Day.IconPhrase;
  let weatherLogo = null;
  
  switch (true) {
    case (/storm/i.test(dayPhrase)):
      weatherLogo = stormLogo;
      break;
    case (/cloud/i.test(dayPhrase)):
      weatherLogo = cloudyLogo;
      break;
    case (/rain/i.test(dayPhrase)):
      weatherLogo = rainLogo;
      break;
    case (/shower/i.test(dayPhrase)):
      weatherLogo = showersLogo;
      break;
    default:
      weatherLogo = sunnyLogo;
      break;
  }

  let date = new Date(forecastForDay.Date);
  const day = weekDays[date.getDay()];
  
  const temp = forecastForDay.Temperature;
  let maxTemp = celsiusToggled ? convertToCel(temp.Maximum.Value) + "°C": temp.Maximum.Value + "°F";
  let minTemp = celsiusToggled ? convertToCel(temp.Minimum.Value) + "°C": temp.Minimum.Value + "°F";

  return (
    <li className="weekDay">
      <img src={weatherLogo} alt="Weather Logo" />
      <div className="info">
        <span>{day}</span>
        <div className="temp">{maxTemp} / {minTemp}</div>
      </div>
      <span className="phrase">{dayPhrase}</span>
    </li>
  );
}