import React from 'react';

const Navbar = () => {
    
    return (
        <>
        <header>
            <span className='welcome'>Welcome to the</span>
            <span>WeatherSite</span>
        </header>
        <div className='search--bar'>
            <input type='text' className='search' placeholder=' Type the city'>
            </input>
        </div>
        </>
    );
};

export default Navbar;