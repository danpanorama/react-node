import * as actionTypes from "../Actions";



const initialState = {

  products: [],
  length: 0,
  sum:0


};


const reducer = (state = initialState, action) => {



  switch (action.type) {


    case actionTypes.ADD_PRODUCT:
      const newState = {
        ...state
      };

      if (action.data) {
        let flag = false
        for (let i = 0; i < newState.products.length; i++) {
          
          if (action.data.id == newState.products[i].id) {
            flag = true
            newState.products[i].amount += 1;

          }
        }

        if (!flag) {
          action.data.amount = 1;
          newState.products = [...newState.products, action.data];
          newState.length = newState.products.length;
        }
        flag = false



      }

      return newState




    case actionTypes.REMOVE_PRODUCT:
      const productsState = {
        ...state
      };
      console.log(action.data.id)
      const found = productsState.products.find(obj => obj.id == action.data.id);

      if (found && found.amount > 1) {
        found.amount -= 1
      } else {
        productsState.products.splice(productsState.products.findIndex(e => e.id == action.data.id), 1)

      }

      productsState.length = productsState.products.length;
      return productsState


 
      



    case actionTypes.BUY:
      const bayState = {
        ...state
      };
      bayState.products = []

      bayState.length = 0;


      return bayState






    default:
      break;
  }
  return state;
};

export default reducer;