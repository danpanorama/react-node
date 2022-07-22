import '../../css/popup.css';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as ActionTypes from "./../../store/Actions";
import AxiosConfig from "../../config/AxiosConfig";
import Form from './Form';


function PopUp(props) {
  const dispatch = useDispatch();

  
  const uploadProduct = useFormik({
    initialValues: {
      id:props.fill.id?props.fill.id:"" ,
      title: props.fill.title?props.fill.title:"" ,
      price: props.fill.price?props.fill.price:"" ,
      description:props.fill.description?props.fill.description:"" ,
      img: props.fill.img?props.fill.img:"" ,
    },
    enableReinitialize: true,
    onSubmit: async (values,{resetForm}) => {
      try {
        console.log(props.state.type)
        if (props.state.type == "edit") {
         
          dispatch({ type: ActionTypes.UPDATE, data: values });
      
          return;
        } else if (props.state.type == "add") {
        
          dispatch({ type: ActionTypes.ADD_ITEM, data: values });
       
        }

        resetForm({})
      } catch (e) {
        console.log(e);
        dispatch({ type: ActionTypes.ERROR, data: e.message });
        setTimeout(()=>{ dispatch({ type: ActionTypes.CLEARE }); },6000);

      }
    },
  });
  
  return (
    <div className={props.is_active?"activepopup":'disable'}>

  <button onClick={()=>{props.activeState('out',{})}}>out</button>


<Form fillText={props.fill} formik={uploadProduct} />
    
     


    </div>
  );
}

export default PopUp;
