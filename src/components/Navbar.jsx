import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import { useSelector, useDispatch } from "react-redux";
//import { loadData } from "../redux/actions/loadDataActionCreator";
//import { getApiData } from '../services/getData';

const Navbar = () => {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();
    const [feels, setFeels] = useState();
    const [icon, setIcon] = useState();


    /*useEffect(() => {
        getApiData().then((tempJson) => setTempMin(tempJson.main));
      }, []);

    useEffect(() => {
        getApiData(city)
        .then((json) => setCityData(json));
      }, []);
*/
      useEffect(() =>{
        getApiData();
      }, [])

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
    const getApiData = async (city) => {
        const API_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ad438473ca965f12fa1f6eacacbf35a&units=metric`;
        const data = await fetch (API_BASE);
        const json = await data.json();   
        setIcon(json.weather[0].icon);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setFeels(json.main.feels_like);
    }

    return (
        <>
            <header>
                <span className='welcome'>
                    Welcome to the
                </span>
                <span>WeatherSite</span>
            </header>
            <div className='search--bar'>
                <input type='text' 
                className='search' 
                placeholder=' Type the city'
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
                <div className='icon' style={{backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png`)}}></div>
                <span className='temperature'>{temp}</span>
                <span className='feels__like'>{feels}</span>
            </div>
        </>
    );
};

export default Navbar;