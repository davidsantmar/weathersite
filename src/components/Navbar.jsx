import React from 'react';
import { useState } from 'react';
import { getApiData, getCoords } from '../services/getData';

const Navbar = () => {
    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    //const [temperature, setTemperature] = useState([]);

    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            searching();        
        }
    }
    function handleChange(event) {
        setCity(event.target.value);
        searching();
    }
    function searching(){
        setLat(getCoords(city)[0]);
        setLong(getCoords(city)[1]);
        //setTemperature(getApiData(city));
    }
    return (
        <>
        <div className='head--web'>
            <header>
                <span className='welcome'>
                    Welcome to the
                </span>
                <span>WeatherSite</span>
            </header>
            <div className='spain__flag'></div>
        </div>
        <div className='search--bar'>
            <input type='text' 
            className='search' 
            placeholder=' Type the city'
            value={city}
            onChange={handleChange}
            onKeyPress={handleEnterPressed} autoFocus            >
            </input>
            <button 
                className='search__button' 
                type='button'
                data-testid='search-button'
                onClick={searching}
            >
                Search
                </button>
        </div>
        <div className='coords'>{lat} {long}</div>
        <div className='temp--min'></div>

        </>
    );
};

export default Navbar;