import {  combineReducers } from "redux";
// import firstReducer from "../reducers/firstReducer";
import cardReducer from "../reducers/cardReducer";
import itemReducer from "../reducers/itemReducer";
import errorReducer from "../reducers/errorReducer";








const rootReducer = combineReducers({
 
    item:itemReducer,
    card:cardReducer,
    err:errorReducer
   
  });


  export default rootReducer;