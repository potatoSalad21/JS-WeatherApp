export default function WeekDay({ forecastForDay }) {
  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thus",
    "Fri",
    "Sat",
  ];
  console.dir(forecastForDay);
  let date = new Date(forecastForDay.Date);
  let day = weekDays[date.getDay()];

  return (
    <li className="weekDay">
      {day}
    </li>
  );
}