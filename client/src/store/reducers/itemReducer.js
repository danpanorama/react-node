import * as actionTypes from "../Actions";

const initialState = {
        item:[],
        itemLength:0

    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_ITEM:
        const newState = {...state}; 
        const d = new Date();
        let ms = d.getMilliseconds();
        let count = 1;
        let id = ms+count 
        count++
        
        if(action.data){
          action.data.id = id
         newState.item = [...newState.item,action.data];
         newState.itemLength = newState.item.length;
         
        }
        
        return newState

        
    case actionTypes.DELETE_ITEM:
    const deleteState = {...state}; 
      let arr= deleteState.item.filter((ele)=>{
        return ele.id != action.data
       })
       deleteState.item = arr
       deleteState.itemLength = deleteState.item.length;
      return deleteState


      case actionTypes.UPDATE:
        const updateState = {
          ...state
        };
        console.log(action.data.id);
       let objIndex = updateState.item.findIndex((obj => obj.id == action.data.id));  
        updateState.item[objIndex] = action.data;
        updateState.length = updateState.item.length;
        return updateState


    

    case actionTypes.SET:
    const setState = {...state}; 
   
  
    console.log('hay fool')

    return setState


    default:
      
      break;
  }
  return state;
};

export default reducer;
