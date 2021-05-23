import './App.css';
import Header from './components/Header';
import ForecastCard from './components/ForecastCard';

function App() {

  return (
    
    <div className='container'>
      <main className='weather-card'>
        <div className='weather-card-wrapper'>
          <Header/>
          <ul className='card-list'>
            <ForecastCard weekForecast={true}/>
            <ForecastCard weekForecast={false}/>
          </ul>
          <footer className='footer-copyright'>С любовью от mercury development</footer>
        </div>    
      </main>
      
    </div>
    
    
  );
}

export default App;
