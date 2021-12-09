import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../Styling/buyandselldate.css";
function BuyDateAndSellDate() {
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

    const gained = profit(result, 0, true, 1, new Map());

    const map = new Map();
    console.log(result);
    let datesFound = [];
    // const map = new Map();
    for (let i = 0; i < result.length; i++) {
      console.log("hello");
      if (map.has(result[i] - gained)) {
        datesFound.push(stocks[map.get(result[i] - gained)]);
        datesFound.push(stocks[i]);
        break;
      }
      map.set(result[i], i);
    }
    console.log(datesFound);
    return datesFound;
  }
  const [datesToDisplay, setdatesToDisplay] = useState([]);
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocksState.stocks);
  useEffect(() => {
    setdatesToDisplay(transform(stocks));
  }, [dispatch, stocks]);
  return (
    <div className="buyandsell-styling">
      <p className="inner-content">
        {" "}
        Buy:-{datesToDisplay[0]?.date + " Sell:- " + datesToDisplay[1]?.date}
      </p>
    </div>
  );
}

export default BuyDateAndSellDate;
