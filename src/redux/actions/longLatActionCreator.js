import longLatActionTypes from './longLatActionTypes';

export function showCity(){
    return { 
        type: longLatActionTypes.LOAD_CITY,
    }
}
