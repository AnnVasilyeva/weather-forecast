import React from 'react';
import './cityItem.css';
import PropTypes from 'prop-types';

export default function CityItem({ item, onClick }) {
  return (
    <li
      className="select-list-item city-item"
      onClick={() => onClick(item.id)}
      aria-hidden="true"
    >
      {item.name}
    </li>

  );
}

CityItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

CityItem.defaultProps = {
  item: '',
  onClick: () => {},
};
