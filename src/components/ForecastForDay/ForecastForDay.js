import React, { useEffect, useState } from 'react';
import './forecastForDay.css';
import PropTypes from 'prop-types';
import Api from '../../service/Api';
import SelectCity from '../SelectCity/SelectCity';
import SelectDay from '../SelectDay/SelectDay';

export default function ForecastForDay({ weekForecast, dayForecast, errorMessage }) {
  const apiBase = new Api();

  const [day, setDay] = useState({ dt: '', isEmpty: true });
  const [city, setCity] = useState({ lat: '', lon: '', isEmpty: true });

  const citySelected = (item) => {
    const newCity = { lat: item.lat, lon: item.lon, isEmpty: false };
    setCity({ ...city, ...newCity });
  };

  const daySelected = (date) => {
    setDay({ ...day, dt: date, isEmpty: false });
  };

  const handleSubmit = () => {
    apiBase.getDayWeather({ ...city, ...day })
      .then((item) => dayForecast({
        date: apiBase.getDay(item.current.dt),
        icon: `http://openweathermap.org/img/wn/${item.current.weather[0].icon}@2x.png`,
        temp: Math.floor(item.current.temp),
      }))
      .catch((error) => errorMessage(error));
  };

  useEffect(() => {
    if (!day.isEmpty && !city.isEmpty) {
      handleSubmit();
    }
  });

  const [inputDate, setInputDate] = useState(false);

  const changeInputDate = () => {
    setInputDate(true);
  };

  return (
    <div className="forecast-select-wrapper">
      <SelectCity weekForecast={weekForecast} citySelected={citySelected} />
      <div className="select-date-wrapper" onClick={changeInputDate} aria-hidden="true">
        {inputDate ? <SelectDay daySelected={daySelected} value={day.dt} />
          : <div className="forecast-select forecast-select-day">Select date</div>}
      </div>

    </div>
  );
}

ForecastForDay.propTypes = {
  dayForecast: PropTypes.func,
  errorMessage: PropTypes.func,
  weekForecast: PropTypes.bool,
};

ForecastForDay.defaultProps = {
  dayForecast: () => {},
  errorMessage: () => {},
  weekForecast: () => {},
};
