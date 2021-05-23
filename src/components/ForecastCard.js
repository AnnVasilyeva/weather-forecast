import React, {useState} from 'react';
import ForecastEmptyMes from './ForecastEmptyMes';
import SelectCity from './SelectCity';
import WeatherList from './WeatherList';
import WeatherCard from './WeatherCard';
import ForecastForDay from './ForecastForDay';

export default function ForecastCard ({weekForecast}) {

  const [isSelect, setIsSelect] = useState(false);
  const [forecastList, setForecastList] = useState([]);
  const [isDay, setIsDay] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  
  const weekTitle = '7 Days Forecast',
        dayTitle = 'Forecast for a Date in the Past';

  const weekSelected = (item) => {
    setIsSelect(true);
    setForecastList(item.daily);
  }

  const dayForecast = (item) => {
    setIsSelect(true);
    setForecastList([...forecastList, item]);
    setIsDay(true);
  } 

  const errorMessage = (item) => {
    setIsSelect(true);
    setErrorMes(item.message);
  }

  
  return (
    <li className='card-list-item'>
      <div className='forecast'>
        <h2 className='forecast-title'>{weekForecast ? weekTitle : dayTitle}</h2>

        {weekForecast ? <SelectCity weekSelected={weekSelected} weekForecast={weekForecast} errorMessage={errorMessage}/> 
                      : <ForecastForDay weekForecast={weekForecast} dayForecast={dayForecast} errorMessage={errorMessage}/>
        }

        {!isSelect ? <ForecastEmptyMes/> : 
                     <WeatherList forecastList={forecastList} errorMes={errorMes} isDay={isDay}/>
        }

      </div>
    </li>
  )
}