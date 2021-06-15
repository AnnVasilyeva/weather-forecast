import React from 'react';
import './cityItem.css';

export default function CityItem ({item, onClick}) {
    return (
        <li className='select-list-item city-item' 
            onClick={() => onClick(item.id)}>
                {item.name}    
        </li>
        
    )
}