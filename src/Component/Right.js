import React from "react";
import MaximumProfitInRupees from "./MaximumProfitInRupees";
import StockGraph from "./StockGraph";
import "../Styling/right.css";
import BuyDateAndSellDate from "./BuyDateAndSellDate.js";
function Right() {
  return (
    <div className="right-styling">
      <MaximumProfitInRupees />
      <StockGraph />
      <BuyDateAndSellDate />
    </div>
  );
}

export default Right;
