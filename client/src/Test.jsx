import { useDispatch } from "react-redux";
import * as ActionTypes from "./store/Actions";
import {store} from './index'


const Test = (dispatch) => {
    console.log('masho')
    return {
      // dispatching plain actions
      onClick: (event) => dispatch({ type: 'SET' }),
      increment: () => dispatch({ type: 'SET' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      reset: () => dispatch({ type: 'RESET' }),
    }
  }


export default Test;
