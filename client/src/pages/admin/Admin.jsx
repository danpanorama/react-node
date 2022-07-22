import React, { useState, useEffect } from "react";
import '../../css/admin.css';
import AdminStateless from './AdminStateless';
import { useDispatch } from "react-redux";
import * as ActionTypes from "./../../store/Actions";

function Admin() {
  const [activePopUpState, setActivePopUpState] = useState({
    active: false,
    type: "",
    fill: {},
  });
  const dispatch = useDispatch()
  
  function openPopUp(type,fill){
    console.log(activePopUpState.active)
    setActivePopUpState({active:!activePopUpState.active,type:type,fill:fill});

  }


  function deleteProduct(e){

          dispatch({ type: ActionTypes.DELETE_ITEM, data: e.target.id });

  }



  return (
    <div className="admin">
      <h2>admin</h2>
      
        <AdminStateless deleteProduct={deleteProduct}  state={activePopUpState}  activeState={openPopUp} />

    </div>
  );
}

export default Admin;
