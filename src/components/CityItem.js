import React from 'react';

export default function CityItem ({item, onClick}) {
    return (
        <li className='select-list-item city-item' 
            onClick={() => onClick(item.id)}>
                {item.name}    
        </li>
        
    )
}