import '../../css/home.css';
import '../../css/productlist.css';

import {useSelector} from "react-redux";


function ProductList(props) {

    const item =  useSelector((state)=>state.item);

  return (
    <div className="fatherListDiv">
      
    <div className="grid-home">
        {item.item?item.item.map((e)=>{
            
                           return(
                 <div key={e.id} className="product">
                     <div className="image">
                         <img className='img' src={e.img} alt="" />
                     </div>
                     <div className="flexcol productinfoall">
                     <div className="productInfo  ">
                         <p className="w100 title">{e.title}</p>
                         <div className=" w100 description txtoverflo">{e.description}</div>
                         <p className="w100 price">{e.price} $</p>
                     </div>
                     <div className="btndiv"><button className='btn' id={JSON.stringify(e)} onClick={props.addToCard} >buy</button></div>
                
                     </div>
                 
                 </div>
             )
            
            
            
        }):"no products"}
    </div>

 </div>
  );
}

export default ProductList;
