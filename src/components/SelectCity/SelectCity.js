import React, { useState } from 'react';
import './selectCity.css';
import PropTypes from 'prop-types';
import Api from '../service/Api';
import CityItem from '../CityItem/CityItem';

export default function SelectCity({
  weekSelected, weekForecast, citySelected, errorMessage,
}) {
  const apiBase = new Api();

  const { data } = apiBase;

  const [inputValue, setInputValue] = useState('');
  const [listOpen, setListOpen] = useState(false);

  const onItemClick = (id) => {
    const selectItem = data.find((item) => item.id === id);

    if (selectItem) {
      setInputValue(() => selectItem.name);
      setListOpen(() => false);
      return apiBase.getWeekWeather(selectItem)
        .then((item) => weekSelected(item))
        .catch((error) => errorMessage(error));
    }
    return false;
  };

  const getDayForecast = (id) => {
    const selectItem = data.find((item) => item.id === id);

    if (selectItem) {
      setInputValue(() => selectItem.name);
      setListOpen(() => false);
      citySelected(selectItem);
    }
  };

  const items = data.map((item) => <CityItem key={item.id} item={item} onClick={weekForecast ? onItemClick : getDayForecast} />);

  return (
    <div className="select-city-wrapper">

      <input
        type="text"
        placeholder="Select city"
        autoComplete="off"
        className="forecast-select forecast-select-city"
        name="city"
        value={inputValue}
        onClick={() => setListOpen(!listOpen)}
      />

      {listOpen
            && (
            <ul className="select-list select-city-list">
              {items}
            </ul>
            )}

    </div>
  );
}

SelectCity.propTypes = {
  weekSelected: PropTypes.func,
  weekForecast: PropTypes.func,
  citySelected: PropTypes.func,
  errorMessage: PropTypes.func,
};

SelectCity.defaultProps = {
  weekSelected: () => {},
  weekForecast: () => {},
  citySelected: () => {},
  errorMessage: () => {},
};
