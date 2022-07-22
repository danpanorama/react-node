import "../../css/productlist.css";
import { useSelector } from "react-redux";

function ProductList(props) {
  const item = useSelector((state) => state.item);

  return (
    <div className="productListFather flexcol">
      <button className="btn addbtn w25" onClick={()=>props.activeState('add',{})} >add</button>

      <div className="flexcol product-contain">
        <div className="gridAdmin border-bottom">
          <p>title</p>
          <p>price</p>
          <p>option</p>
        </div>

        {item.item
          ? item.item.map((e) => {
              return (
                <div key={e.id} className="gridAdmin border-bottom braduce-left-right-bottom">
                  <p className="flex-center">{e.title}</p>
                  <p className="flex-center">{e.price}</p>
                  <div className="flex-center-row">
                    <button
                      ele={e}
                      onClick={() => {
                       props.activeState('edit',e)
                      }}
                      text={"edit"}
                    >
                      edit
                    </button>
                    <button
                      className="primerybtn"
                      id={e.id}
                      onClick={props.deleteProduct}
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })
          : " no product "}
      </div>
    </div>
  );
}

export default ProductList;
