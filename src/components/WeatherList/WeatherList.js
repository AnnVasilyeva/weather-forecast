import React, { useState } from 'react';
import './weatherList.css';
import PropTypes from 'prop-types';
import WeatherCard from '../WeatherCard/WeatherCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function WeatherList({ forecastList, errorMes, isDay }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getDay = (unixTimestamp) => {
    const monthName = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const date = new Date(unixTimestamp * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${day > 10 ? day : `0${day}`} ${monthName[month]} ${year}`;
  };

  const itemTransform = (item) => {
    const date = getDay(item.dt);
    const temp = Math.floor(item.temp.day);
    const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

    return {
      date,
      temp,
      icon,
    };
  };

  const changeItemNumPrev = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(selectedIndex);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const changeItemNumNext = () => {
    if (selectedIndex === forecastList.slice(selectedIndex, selectedIndex + 3).length + 1) {
      setSelectedIndex(selectedIndex);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const itemDay = forecastList.map((item) => <WeatherCard key={item.dt} item={item} isDay={isDay} />);

  const items = forecastList.slice(selectedIndex, selectedIndex + 3).map((item) => {
    const newItem = itemTransform(item);
    return <WeatherCard key={item.dt} item={newItem} isDay={isDay} />;
  });

  return (
    <div className="forecast-week-list-wrapper">
      {errorMes ? <ErrorMessage errorMes={errorMes} />
        : (
          <>
            <button type="button" aria-label="Back" className="forecast-week-list-btn prev_btn" onClick={() => changeItemNumPrev()} />
            <ul className="forecast-week-list">
              {isDay ? itemDay : items}
            </ul>
            <button type="button" aria-label="Next" className="forecast-week-list-btn next_btn" onClick={() => changeItemNumNext()} />
          </>
        )}

    </div>
  );
}

WeatherList.propTypes = {
  forecastList: PropTypes.arrayOf,
  errorMes: PropTypes.string,
  isDay: PropTypes.bool,
};

WeatherList.defaultProps = {
  forecastList: [],
  errorMes: 'Error',
  isDay: false,
};
