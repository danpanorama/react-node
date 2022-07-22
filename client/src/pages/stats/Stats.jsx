import "../../css/stats.css";

import PopUp from "../../components/popup/PopUp";
import ProductList from "../../components/productlist/ProductList";
import AxiosConfig from "../../config/AxiosConfig";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as ActionTypes from "./../../store/Actions";
import StateComp from "./StateComp";
import StatsDayCell from "./StatsDayCell";

function Stats(props) {
  const [topSeller, setTopSeller] = useState([]);
  const [topUnique, setTopUnique] = useState([]);
  const [dayCell, setDayCell] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    try {
      await AxiosConfig.get("/stats")
        .then((res) => {
          if (res.data.err) {
            dispatch({ type: ActionTypes.ERROR, data: res.data.err.message });
            return;
          }
          setTopUnique(res.data.topUnique);
          setTopSeller(res.data.topSells);
          setDayCell(res.data.day);

          console.log(res.data);
        })
        .catch((err) => {
          console.log(err + " error while handdleing data from client #####");
          dispatch({
            type: ActionTypes.ERROR,
            data:
              err.message +
              " err.message #%%$%%%%# error while handdleing data from client",
          });
        });
    } catch (e) {
      console.log(e + " error while getting data from server");
      dispatch({
        type: ActionTypes.ERROR,
        data: "error.message ### error while getting data from server",
      });
    }
  }

  return (
    <div className="stats">
      <h1>states</h1>

      <div className="container-all">
        <div className="center-box flexrow">
          <StateComp header={"top Seller"} products={topSeller} />
          <StateComp header={"unique"} products={topUnique} />

          <StatsDayCell header={"daycell"} products={dayCell} />
        </div>
      </div>
    </div>
  );
}

export default Stats;
