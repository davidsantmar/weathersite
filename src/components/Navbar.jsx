import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadData } from "../redux/actions/loadDataActionCreator";
import { getApiData } from '../services/getData';

const Navbar = () => {
    const [city, setCity] = useState('');
    //const cityData = useSelector((state) => state.cities);
    const [cityData, setCityData] = useState([]);
    const dispatch = useDispatch();
    const [tempMin, setTempMin] = useState();

    /*useEffect(() => {
        getApiData().then((tempJson) => setTempMin(tempJson.main));
      }, []);
*/
    useEffect(() => {
        getApiData(city)
        .then((json) => setCityData(json));
      }, []);


    const handleEnterPressed = (event) => {
        if(event.key === 'Enter'){
            handleChange();       
        }
    }
    function handleChange(event) {
        setCity(event.target.value);
    }
    async function handleClick(){
        //prueba();
        setCity(city);
        setCityData(getApiData(city));
        dispatch(loadData(city));
       //setTempMin(getApiData(city));
        //return minTemp;
    }
    /*async function prueba(){
        await console.log(cityData);
    }*/
   
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
            <div className='temp--min'>
                
            {JSON.stringify(tempMin)}
           {cityData?.length > 0 &&
           cityData.map((city) => (
                  <>
                      <div key={city.id}>
                        {city.temp}
                      </div>
                     
                      
                  </>
                ))}            
                </div>
        </>
    );
};

export default Navbar;