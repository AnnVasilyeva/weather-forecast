import React, {useEffect, useState} from 'react';
import ApiBase from '../service/Api';
import SelectCity from './SelectCity';
import SelectDay from './SelectDay';

export default function ForecastForDay ({weekForecast, dayForecast, errorMessage}) {
    const apiBase = new ApiBase();

    const [day, setDay] = useState({dt: '', isEmpty: true});
    const [city, setCity] = useState({lat: '', lon: '', isEmpty: true});

    useEffect(() => {
        if(!day.isEmpty && !city.isEmpty) {
            handleSubmit();
        }
    })

    const citySelected = (item) => {
        const newCity = {lat: item.lat, lon: item.lon, isEmpty: false};
        setCity({...city, ...newCity});
        
    }

    const daySelected = (date) => {
        setDay({...day, dt: date, isEmpty: false});
        
    }

 
    const handleSubmit = () => {
        
        apiBase.getDayWeather({...city, ...day})
            .then((item) => dayForecast({date: apiBase.getDay(item.current.dt), 
                                icon: `http://openweathermap.org/img/wn/${item.current.weather[0].icon}@2x.png`,
                                temp: Math.floor(item.current.temp)
                            }))
            .catch((error) => errorMessage(error))  
        

    }
     
    
    const [inputDate, setInputDate] = useState(false);

    const changeInputDate = () => {
        setInputDate(true);
    }

    
    return (
        <div className='forecast-select-wrapper'>
            <SelectCity weekForecast={weekForecast} citySelected={citySelected}/>
            <div className='select-date-wrapper' onClick={changeInputDate}>
                {inputDate ?  <SelectDay daySelected={daySelected} value={day.dt}/> : 
                    <div className='forecast-select forecast-select-day'>Select date</div>    
                } 
            </div>
              
        </div>
    )
}