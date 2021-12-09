import React from "react";
import MaximumProfitInRupees from "./MaximumProfitInRupees";
import StockGraph from "./StockGraph";
import "../Styling/right.css";
function Right() {
  return (
    <div className="right-styling">
      <MaximumProfitInRupees />
      <StockGraph />
    </div>
  );
}

export default Right;
