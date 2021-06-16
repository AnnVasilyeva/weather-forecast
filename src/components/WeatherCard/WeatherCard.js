import React from 'react';
import './weatherCard.css';
import PropTypes from 'prop-types';

export default function WeatherCard({ item, isDay }) {
  const { date, icon, temp } = item;
  const nameClass = 'forecast-day-item';

  return (

    <li className={isDay ? nameClass : 'forecast-week-item'}>
      <div className="forecast-week-item-day">{date}</div>
      <div className="forecast-week-item-icon">
        <img src={icon} alt="weather icon" />
      </div>
      <div className="forecast-week-item-temp">{temp > 0 ? `+${temp}º` : `-${temp}º`}</div>
    </li>
  );
}

WeatherCard.propTypes = {
  item: PropTypes.objectOf,
  isDay: PropTypes.bool,
};

WeatherCard.defaultProps = {
  item: {},
  isDay: false,
};
