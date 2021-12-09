import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LineChart from "./LineChart.js";
import GetStocks from "../Redux/Actions/StockList";
import "../Styling/stockgraph.css";
// import PriceChart from "./Component/PriceChart.js";
function StockGraph() {
  const stocks = useSelector((state) => state.stocksState.stocks);
  const dispatch = useDispatch();
  const [lineChartVariable, setLineChartVariable] = useState([]);
  function convertIntoArray(stocks) {
    const currArray = [];
    const dateArray = [];

    stocks?.map((a) => {
      currArray.push(a.curr);
      dateArray.push(a.date);
    });

    return [[...currArray], [...dateArray]];
  }

  useEffect(() => {
    dispatch(GetStocks());
    setTimeout(() => {
      setLineChartVariable(convertIntoArray(stocks));
    }, 1000);
  }, [dispatch, stocks]);
  return (
    <div className="stock-graph">
      {lineChartVariable.length == 2 && (
        <LineChart lineChartVariable={lineChartVariable} />
      )}
    </div>
  );
}

export default StockGraph;
