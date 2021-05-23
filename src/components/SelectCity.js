import React, {useState} from 'react';
import ApiBase from '../service/Api';
import CityItem from './CityItem';

export default function SelectCity ({weekSelected, weekForecast, citySelected, errorMessage}) {
    const apiBase = new ApiBase();

    const data = apiBase.data;
 
    const [inputValue, setInputValue] = useState('');
    const [listOpen, setListOpen] = useState(false);

    const onItemClick = (id) => {
        const selectItem = data.find(item => item.id === id);

        if(selectItem) {
            setInputValue(() => selectItem.name);
            setListOpen(() => false);
            return apiBase.getWeekWeather(selectItem)
                        .then(item => weekSelected(item))
                        .catch((error) => errorMessage(error))
                        
        }
    }

    const getDayForecast = (id) => {
        const selectItem = data.find(item => item.id === id);
        
        if(selectItem) {
            setInputValue(() => selectItem.name);
            setListOpen(() => false);
            citySelected(selectItem);               
        }


    }


    const items = data.map((item, index) => {
        return <CityItem key={index} item={item} onClick={weekForecast ? onItemClick : getDayForecast}/>
    });
   
    return (
        <div className='select-city-wrapper'>

            <input type='text' 
                    placeholder='Select city'
                    autoComplete='off'
                    className='forecast-select forecast-select-city'    
                    name='city' 
                    value={inputValue} 
                    onClick={() => setListOpen(!listOpen)}

            />

            {listOpen && 
            <ul className='select-list select-city-list'>
                {items}
            </ul>}

        </div>
    )
}