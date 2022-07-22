import '../../css/nav.css';
import '../../css/stats.css';


import React,{ useState, useEffect } from 'react';


function StatsDayCell(props) {
    




   

  return (
    <div className="border squer">
        <h3>{props.header}</h3>
        <div className='w100'>
            {props.products? props.products.map((e)=>{
                
                return(
                    <div className="flexrow"  key={e.DATE} >
                      <div className="flexrow"><p>day-  {e.DATE}- -
                        {e.totalCount}$</p></div>
                    </div>
                )
            }):"no stats in here"}
        </div>
       

      



    </div>
  );
}

export default StatsDayCell;
