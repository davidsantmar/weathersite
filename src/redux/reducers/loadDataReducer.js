import loadDataActionTypes from "../actions/loadDataActionTypes";

function loadDataReducer(city = [], action) {
  switch (action.type) {
    case loadDataActionTypes.LOAD_CITY_DATA:
      return action.city;

    default:
      return city;
  }
}

export default loadDataReducer;
