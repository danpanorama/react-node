import * as actionTypes from "../Actions";

const initialState = {
  err: "",
  start: false,
  status: ''

};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.ERROR:
      const newState = {
        ...state
      };
      newState.err = action.data;
      newState.start = true
      newState.status = 'error'
      return newState



    case actionTypes.SUCCESS:
      const successState = {
        ...state
      };

      successState.err = action.data;
      successState.start = true
      successState.status = 'success'
      return successState


      
    case actionTypes.CLEARE:
      const clearState = {
        ...state
      };
      clearState.err = '';
      clearState.start = false
      clearState.status = ''
      return clearState




    default:
      break;
  }
  return state;
};

export default reducer;