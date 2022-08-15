import loadDataActionTypes from "./loadDataActionTypes";
import axios from "axios";

export function loadData(cityName){
  const API_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8ad438473ca965f12fa1f6eacacbf35a&units=metric`

  return async (dispatch) => {
    try {
      const { data } = await axios(`${API_BASE}`);

      dispatch({
        type: loadDataActionTypes.LOAD_CITY_DATA,
        cities: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
