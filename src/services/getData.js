export const getApiData = async () => {
    const API_BASE = 'https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=8ad438473ca965f12fa1f6eacacbf35a';

    const data = await fetch (API_BASE);
    const json = await data.json();      

    return json;
}