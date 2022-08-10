import longLatActionTypes from '../actions/longLatActionTypes';

function longLatReducer(long, lat, action){
    switch(action.type){
        case longLatActionTypes.LOAD_CITY:
            return [...action.city];
        default:
            return city;
    }

}

export default longLatReducer;