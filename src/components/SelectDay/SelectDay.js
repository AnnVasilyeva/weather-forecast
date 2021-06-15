import React from 'react';
import './selectDay.css';
import PropTypes from 'prop-types';

export default function SelectDay({ daySelected, value }) {
  // не срабатывает max/min у input, хотя формат дат у элемента отображается правильно

  const getTransformDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month > 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`} `;
  };

  const d = new Date();

  const maxD = getTransformDate(d.setDate(d.getDate() - 1));
  const minD = getTransformDate(d.setDate(d.getDate() - 5));

  return (

    <input
      type="date"
      onChange={(e) => daySelected(e.target.value)}
      className="forecast-select forecast-select-day active"
      value={value}
      name="date"
      placeholder="Select date"
      max={maxD}
      min={minD}
    />

  );
}

SelectDay.propTypes = {
  daySelected: PropTypes.func,
  value: PropTypes.string,
};

SelectDay.defaultProps = {
  daySelected: () => {},
  value: '',
};
