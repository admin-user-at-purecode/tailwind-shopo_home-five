/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from "react";

function CountDown(lastDate) {
  const [showDate, setDate] = useState(0);
  const [showHour, setHour] = useState(0);
  const [showMinute, setMinute] = useState(0);
  const [showSecound, setDateSecound] = useState(0);
  const [year, setYear] = useState(0); // State to hold the year

  // count Down
  const provideDate = new Date(lastDate);
  // format date
  const _year = provideDate.getFullYear();
  const month = provideDate.getMonth();
  const date = provideDate.getDate();
  const hours = provideDate.getHours();
  const minutes = provideDate.getMinutes();
  const seconds = provideDate.getSeconds();

  // date calculation logic
  const _seconds = 1000;
  const _minutes = _seconds * 60;
  const _hours = _minutes * 60;
  const _date = _hours * 24;

  // interval function
  const startInterval = () => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance =
        new Date(_year, month, date, hours, minutes, seconds).getTime() -
        now.getTime();
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setDate(Math.floor(distance / _date));
      setMinute(Math.floor((distance % _hours) / _minutes));
      setHour(Math.floor((distance % _date) / _hours));
      setDateSecound(Math.floor((distance % _minutes) / _seconds));
    }, 1000);
  };

  // effect
  useEffect(() => {
    if (lastDate !== "") {
      setYear(_year); // Set the year state
      startInterval();
    }
  }, [lastDate]);

  return { year, showDate, showHour, showMinute, showSecound }; // Include year in the return object
}

export default CountDown;
