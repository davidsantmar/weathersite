import { combineReducers } from "redux";
import loadDataReducer from './loadDataReducer';


const rootReducer = combineReducers({
    loadDataReducer: loadDataReducer,
});

export default rootReducer;
