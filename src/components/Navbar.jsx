import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();
    const [feels, setFeels] = useState();
    const [icon, setIcon] = useState();
    const [color, setColor] = useState('white');

    useEffect(() =>{
    getApiData();
    }, []);

    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            handleClick();       
        }
    }
    function handleChange(event) {
        setCity(event.target.value);
    }
     function handleClick(){
        setCity(city);
        getApiData(city);
    }
    const reset = () => { 
        setCity('');
        setWeather('');
        setIcon();
        setTemp('');
        setFeels('');
        setColor('white');
    }
    const getApiData = async (city) => {
        const API_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ad438473ca965f12fa1f6eacacbf35a&units=metric`;
        const data = await fetch (API_BASE);
        const json = await data.json();   
        setIcon(json.weather[0].icon);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setFeels(json.main.feels_like);
        setColor('lightgreen');
    }

    return (
        <>
            <header onClick={reset} style={{color: `${color}`}}>
                <span className='welcome'>
                    Welcome to the
                </span>
                <span>WeatherSite</span>
            </header>
            <div className='search--bar'>
                <input type='text' 
                className='search' 
                placeholder='Type the city'
                value={city}
                onChange={handleChange}
                onKeyPress={handleEnterPressed} autoFocus            
                >
                </input>
            <button 
                className='search__button' 
                type='button'
                data-testid='search-button'
                onClick={handleClick}
            >
                Search
                </button>
            </div>
            <div className='current--weather'>
                <span className='weather'>{weather}</span>
                <span className='icon' 
                style={{backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`}}
                >
                </span>
                <span className='temperature'>Current temp: {temp} &deg;C</span>
                <span className='feels__like'>Feels like: {feels} &deg;C</span>
            </div>
        </>
    );
};

export default Navbar;