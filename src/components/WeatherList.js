import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import ApiBase from '../service/Api';
import ErrorMessage from './ErrorMessage';


export default function WeatherList ({forecastList, errorMes, isDay}) {

    const [i, setI] = useState(0);
    const apiBase = new ApiBase();
    

    const itemTransform = (item) => {
        
        const date = apiBase.getDay(item.dt);
        const temp = Math.floor(item.temp.day);
        const icon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        
        return {
            date: date,
            temp: temp,
            icon: icon
        }
    }


    const changeItemNumPrev = () => {
        i === 0 ? setI(i) : setI(i - 1)
        
    }

    const changeItemNumNext = () => {  
        i === forecastList.slice(i, i + 3).length + 1 ? setI(i) : setI(i + 1)
    }

    const itemDay = forecastList.map((item) => {
        return <WeatherCard key={item.dt} item={item} isDay={isDay}/>
    });
    
    const items = forecastList.slice(i, i + 3).map((item) => {
        const newItem = itemTransform(item);
        return <WeatherCard key={item.dt} item={newItem} isDay={isDay}/>
    });

    return (
        <div className='forecast-week-list-wrapper'>
            {errorMes ? <ErrorMessage errorMes={errorMes}/> : 
                <>   
                <button type='button' className='forecast-week-list-btn prev_btn' onClick={() => changeItemNumPrev()}></button>
                <ul className='forecast-week-list'>
                    {isDay ? itemDay : items}
                </ul>
                <button type='button' className='forecast-week-list-btn next_btn' onClick={() => changeItemNumNext()}></button>
                </>
            }
            
        </div>
    )

}