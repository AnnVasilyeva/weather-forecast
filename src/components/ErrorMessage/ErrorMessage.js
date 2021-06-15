import React from 'react';
import './errorMessage.css';
import PropTypes from 'prop-types';

export default function ErrorMessage({ errorMes }) {
  return (
    <div className="error-message">{errorMes}</div>

  );
}

ErrorMessage.propTypes = {
  errorMes: PropTypes.string,
};

ErrorMessage.defaultProps = {
  errorMes: '',
};
