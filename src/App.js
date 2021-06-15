import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ForecastCard from './components/ForecastCard/ForecastCard';

function App() {
  return (

    <div className="container">
      <main className="weather-card">
        <div className="weather-card-wrapper">
          <Header />
          <div className="card-list">
            <ForecastCard weekForecast />
            <ForecastCard weekForecast={false} />
          </div>
          <footer className="footer-copyright">С любовью от mercury development</footer>
        </div>
      </main>

    </div>

  );
}

export default App;
