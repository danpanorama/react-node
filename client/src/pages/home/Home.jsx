import { useState } from 'react';
import ShoppingCard from '../../components/card/ShoppingCard';
import '../../css/home.css';
import ProductList from './ProductList';
import {useDispatch,useSelector} from "react-redux";
import AxiosConfig from "../../config/AxiosConfig";

import * as ActionTypes from './../../store/Actions';

function Home() {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);
  const [cardState,setCardState] = useState(false);

  function changeState(){
    setCardState(!cardState);
  }

  function addToCard(e){
    try{
      let data = JSON.parse(e.target.id);
         dispatch({type:ActionTypes.ADD_PRODUCT,data:data})      
            
    }catch(e){
      dispatch({type:ActionTypes.ERROR,data:e.message})
    }
   
  }

  async function buyProducts(total){
  
    try {
      await AxiosConfig.post("/stats",{data:card.products,total:total})
        .then((res) => {
        console.log(res.data); 
        if(res.data.err){
          console.log(res.data,":::"); 
          dispatch({type:ActionTypes.ERROR,data:res.data.err})
          setTimeout(()=>{
           dispatch({type:ActionTypes.CLEARE})
          },5000)
          return
        }

        dispatch({type:ActionTypes.BUY})
        dispatch({type:ActionTypes.SUCCESS,data:res.data.msg})
       setTimeout(()=>{
        dispatch({type:ActionTypes.CLEARE})
       },5000)
        
        })
        .catch((e) => {
          console.log(e + ' erro');
          dispatch({type:ActionTypes.ERROR,data:"error"})
          setTimeout(()=>{
            dispatch({type:ActionTypes.CLEARE})
           },5000)
        });
    } catch (e) {
      console.log(e + ' error while getting data from server');
      dispatch({type:ActionTypes.ERROR,data:e.message})
      setTimeout(()=>{
        dispatch({type:ActionTypes.CLEARE})
       },5000)
    }

  }

  
  function removeFromCard(e){
    let data = JSON.parse(e.target.id)
  
    dispatch({type:ActionTypes.REMOVE_PRODUCT,data:data})
  }



  return (
    <div className="">
<h2>home</h2>

<div className="container-home flexcol">

  <div className="center-boxhome">
    <div className="card posrel ">
      <button className='btncard btn ' onClick={changeState}>card + {card.length}</button>
     <br /><br />
      <ShoppingCard buyProducts={buyProducts} removeFromCard={removeFromCard} setActive={setCardState} active={cardState} />

      </div>
    <ProductList  addToCard={addToCard}/>
  </div>
</div>

    </div>
  );
}

export default Home;
