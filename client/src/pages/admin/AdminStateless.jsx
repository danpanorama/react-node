import '../../css/nav.css';
import PopUp from '../../components/popup/PopUp';

import ProductList from '../../components/productlist/ProductList';

function AdminStateless(props) {
  return (
    <div className="admin">
      <div className="popup">
<PopUp fill={props.state.fill} state={props.state} activeState={props.activeState} is_active={props.state.active} />
      </div>

      
  <div className="container">
         
      <div className="productList">


      
<ProductList deleteProduct={props.deleteProduct} activeState={props.activeState}  />
      </div> 
        </div>




    </div>
  );
}

export default AdminStateless;
