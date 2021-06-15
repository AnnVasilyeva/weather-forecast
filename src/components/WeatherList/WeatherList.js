import React, { useState } from 'react';
import './weatherList.css';
import WeatherCard from '../WeatherCard/WeatherCard';
import ApiBase from '../../service/Api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


export default function WeatherList ({forecastList, errorMes, isDay}) {

    const [selectedIndex, setSelectedIndex] = useState(0);
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
        selectedIndex === 0 ? setSelectedIndex(selectedIndex) : setSelectedIndex(selectedIndex - 1)
        
    }

    const changeItemNumNext = () => {  
        selectedIndex === forecastList.slice(selectedIndex, selectedIndex + 3).length + 1 ? setSelectedIndex(selectedIndex) : setSelectedIndex(selectedIndex + 1)
    }

    const itemDay = forecastList.map((item) => {
        return <WeatherCard key={item.dt} item={item} isDay={isDay}/>
    });
    
    const items = forecastList.slice(selectedIndex, selectedIndex + 3).map((item) => {
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