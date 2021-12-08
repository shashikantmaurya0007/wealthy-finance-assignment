import React from "react";
import "../Styling/maximumProfitInRupees.css";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function MaximumProfitInRupees() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocksState.stocks);
  const [maxprofit, setProfit] = useState(0);

  function profit(prices, currentDay, buy, transaction, memo) {
    if (currentDay >= prices.length) {
      return 0;
    }
    if (transaction == 0) return 0;
    let currentTime = currentDay + "" + buy + "" + transaction;
    if (memo.has(currentTime)) return memo.get(currentTime);
    if (buy) {
      let idle = profit(prices, currentDay + 1, buy, transaction, memo);
      let buyAmount =
        -prices[currentDay] +
        profit(prices, currentDay + 1, false, transaction, memo);
      memo.set(currentTime, Math.max(idle, buyAmount));

      return Math.max(idle, buyAmount);
    } else {
      let idle = profit(prices, currentDay + 1, buy, transaction, memo);
      let buyAmount =
        prices[currentDay] +
        profit(prices, currentDay + 1, true, transaction - 1, memo);
      memo.set(currentTime, Math.max(idle, buyAmount));
      return Math.max(idle, buyAmount);
    }
  }

  function transform(stocks) {
    const result = stocks?.map((a) => {
      return a.curr;
    });

    return profit(result, 0, true, 1, new Map());
  }

  useEffect(() => {
    setProfit(transform(stocks));
  }, [dispatch, stocks]);
  return <div className="maximum-profit-in-rupees-card">₹{maxprofit * 10}</div>;
}

export default MaximumProfitInRupees;
