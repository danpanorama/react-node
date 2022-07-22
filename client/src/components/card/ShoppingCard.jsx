import '../../css/card.css';
import {useSelector} from "react-redux";

function ShoppingCard(props) {
    const card =  useSelector((state)=>state.card);
    let total = 0;
  return (
    <div className={props.active && card.length >0?"active_card":"disable_card"}>
        <h2>card</h2>
        <div className="cardInfo">
            <div className="gridrow">
            {  card.products.length > 0 ? card.products.map((e,i)=>{
           total+= (e.price * e.amount)
                return(
                    <div key={e.id + i + e.title} className=" productInCard" >
                       <p className="amount">{e.amount} * </p> 
                       <p className="title">{e.title} </p>
                        <p className="price">{e.price} </p>
                     
                        
                        <button className='primerybtn'  id={JSON.stringify(e)} onClick={props.removeFromCard} >{e.amount > 1? "---":"delete"}</button>
    
                    </div>
                )
    
    
            }):"you shulde not see that"}
            </div>
        </div>

     

<button className='btn buybtn'  onClick={()=>{props.buyProducts(total)}}>buy    {total}$</button>

    </div>
  );
}

export default ShoppingCard;
