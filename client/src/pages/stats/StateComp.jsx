import '../../css/nav.css';
import '../../css/stats.css';


import React,{ useState, useEffect } from 'react';


function StateComp(props) {
    


   

  return (
    <div className="border squer">
        <h3>{props.header}</h3>
        <div className='w100' >
            {props.products? props.products.map((e,i)=>{

                return(
                    <div className="flexrow "  key={e.orderid} >
                      <div className="flexrowalignleft">
                        <p>product name: {e.productname} -
                        {e.TotalQuantity}</p></div>
                    </div>
                )
            }):"no stats in here"}
        </div>
       

      



    </div>
  );
}

export default StateComp;
