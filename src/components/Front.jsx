import React from 'react';
import { useState } from 'react';

const Front = () => {
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();
    const [feels, setFeels] = useState();
    const [icon, setIcon] = useState();
    const [color, setColor] = useState('white');
    const [lon, setLon] = useState();
    const [lat, setLat] = useState();
    const [firstTemp, setFirstTemp] = useState();
    const [firstIcon, setFirstIcon] = useState();
    const [firstHour, setFirstHour] = useState();
    const [secondTemp, setSecondTemp] = useState();
    const [secondIcon, setSecondIcon] = useState();
    const [secondHour, setSecondHour] = useState();
    const [thirdTemp, setThirdTemp] = useState();
    const [thirdIcon, setThirdIcon] = useState();
    const [thirdHour, setThirdHour] = useState();
    const [fourthTemp, setFourthTemp] = useState();
    const [fourthIcon, setFourthIcon] = useState();
    const [fourthHour, setFourthHour] = useState();
    const [fifthTemp, setFifthTemp] = useState();
    const [fifthIcon, setFifthIcon] = useState();
    const [fifthHour, setFifthHour] = useState();
    const [sixthTemp, setSixthTemp] = useState();
    const [sixthIcon, setSixthIcon] = useState();
    const [sixthHour, setSixthHour] = useState();
    const [seventhTemp, setSeventhTemp] = useState();
    const [seventhIcon, setSeventhIcon] = useState();
    const [seventhHour, setSeventhHour] = useState();
    const [eighthTemp, setEighthTemp] = useState();
    const [eighthIcon, setEighthIcon] = useState();
    const [eigthtHour, setEigthtHour] = useState();
    const [ninethTemp, setNinethTemp] = useState();
    const [ninethIcon, setNinethIcon] = useState();
    const [ninethHour, setNinethHour] = useState();
    const [tenthTemp, setTenthTemp] = useState();
    const [tenthIcon, setTenthIcon] = useState();
    const [tenthHour, setTenthHour] = useState();
    const [eleventhTemp, setEleventhTemp] = useState();
    const [eleventhIcon, setEleventhIcon] = useState();
    const [eleventhHour, setEleventhHour] = useState();
    const [twelvethTemp, setTwelvethTemp] = useState();
    const [twelvethIcon, setTwelvethIcon] = useState();
    const [twelvethHour, setTwelvethHour] = useState();

    /*useEffect(() =>{
        getApiData();
    }, []);*/

    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            handleClick();
        }
    }
    const handleChange = (event) => {
        setCity(event.target.value);
    }
    const handleClick = () => {
        setCity(city);
        //getApiData(city);
        //getHourlyData(lat, lon);
        fetchUnion();
    }
    const reset = () => { 
        setCity('');
        setWeather('');
        setIcon();
        setTemp('');
        setFeels('');
        setColor('white');
        setLat('');
        setLon('');

    }
    const getApiData = async (city) => {
        const API_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ad438473ca965f12fa1f6eacacbf35a&units=metric`;
        const data = await fetch (API_BASE);
        const json = await data.json();
        setIcon(json.weather[0].icon);
        setTemp(Math.ceil(json.main.temp) + ' °');
        setWeather(json.weather[0].description);
        setFeels('Feels like: ' + Math.ceil(json.main.feels_like) + ' °');
        setColor('lightgreen');
        setLon(json.coord.lon);
        setLat(json.coord.lat);

        return json;
    }
    const getHourlyData = async (lati, long) => {
        const API_BASE1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=minutely&appid=afdbaca5d0aef91b025609ff649b1f63&units=metric`;        
        const data = await fetch (API_BASE1);
        const json1 = await data.json(); 
        setFirstIcon(json1.hourly.weather[0].icon);
        setFirstTemp(Math.ceil(json1.hourly[0].temp) + ' °');
        setFirstHour();
        setSecondIcon(json1.hourly.weather[1].icon);
        setSecondTemp(Math.ceil(json1.hourly[1].temp) + ' °');
        setThirdIcon(json1.hourly[0].weather[2].icon);
        setThirdTemp(Math.ceil(json1.hourly[2].temp) + ' °');
        setFourthIcon(json1.hourly[0].weather[3].icon);
        setFourthTemp(Math.ceil(json1.hourly[3].temp) + ' °');
        setFifthIcon(json1.hourly[0].weather[4].icon);
        setFifthTemp(Math.ceil(json1.hourly[4].temp) + ' °');
        setSixthIcon(json1.hourly[0].weather[5].icon);
        setSixthTemp(Math.ceil(json1.hourly[5].temp) + ' °');
        setSeventhIcon(json1.hourly[0].weather[6].icon);
        setSeventhTemp(Math.ceil(json1.hourly[6].temp) + ' °');
        setEighthIcon(json1.hourly[0].weather[7].icon);
        setEighthTemp(Math.ceil(json1.hourly[7].temp) + ' °');
        setNinethIcon(json1.hourly[0].weather[8].icon);
        setNinethTemp(Math.ceil(json1.hourly[8].temp) + ' °');
        setTenthIcon(json1.hourly[0].weather[9].icon);
        setTenthTemp(Math.ceil(json1.hourly[9].temp) + ' °');
        setEleventhIcon(json1.hourly[0].weather[10].icon);
        setEleventhTemp(Math.ceil(json1.hourly[10].temp) + ' °');
        setTwelvethIcon(json1.hourly[0].weather[11].icon);
        setTwelvethTemp(Math.ceil(json1.hourly[11].temp) + ' °');

        return json1;
    }
    const fetchUnion = () => {
        Promise.all([getApiData(city), getHourlyData(lat, lon)]);
    }
    //fetchUnion();  no puede hacerse así porque consume los 1k requests

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
                    onKeyPress={handleEnterPressed}
                >
                </input>
                <button 
                    className='search--button'
                    onClick={handleClick}>
                    Search
                </button>
            </div>
            <div className='current--weather'>
                <span className='weather'>{weather}</span>
                <span className='icon' 
                style={{backgroundImage: `url(http://openweathermap.org/img/w/${icon}.png)`}}
                >
                </span>
                <span className='temperature'>{temp}</span>
                <span className='feels__like'>{feels}</span>
            </div>
            <div className='hourly--container'>
                <div className='hourly__data'>
                    <span>{firstHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${firstIcon}.png)`}}
                    >
                    </span>
                    <span>{firstTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{secondHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${secondIcon}.png)`}}
                    >
                    </span>
                    <span>{secondTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{thirdHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${thirdIcon}.png)`}}
                    >
                    </span>
                    <span>{thirdTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{fourthHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${fourthIcon}.png)`}}
                    >
                    </span>
                    <span>{fourthTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{fifthHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${fifthIcon}.png)`}}
                    >
                    </span>
                    <span>{fifthTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{sixthHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${sixthIcon}.png)`}}
                    >
                    </span>
                    <span>{sixthTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{seventhHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${seventhIcon}.png)`}}
                    >
                    </span>
                    <span>{seventhTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{eigthtHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${eighthIcon}.png)`}}
                    >
                    </span>
                    <span>{eighthTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{ninethHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${ninethIcon}.png)`}}
                    >
                    </span>
                    <span>{ninethTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{tenthHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${tenthIcon}.png)`}}
                    >
                    </span>
                    <span>{tenthTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{eleventhHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${eleventhIcon}.png)`}}
                    >
                    </span>
                    <span>{eleventhTemp}</span>
                </div>
                <div className='hourly__data'>
                    <span>{twelvethHour}</span>
                    <span className='hourly__icon' 
                    style={{backgroundImage: `url(http://openweathermap.org/img/w/${twelvethIcon}.png)`}}
                    >
                    </span>
                    <span>{twelvethTemp}</span>
                </div>
            </div>
        </>
    );
};

export default Front;