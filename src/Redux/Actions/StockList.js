import StockListConstants from "../Constants/StockListConstants.js";
const stocks = [
  { id: 1, date: "1 - 12 - 2021", curr: 500 },
  { id: 2, date: "2 - 12 - 2021", curr: 400 },
  { id: 3, date: " 3 - 12 - 2021", curr: 600 },
  { id: 4, date: " 4 - 12 - 2021", curr: 440 },
  { id: 5, date: " 5 - 12 - 2021", curr: 800 },
  { id: 6, date: "6 - 12 - 2021", curr: 900 },
  { id: 7, date: "7 - 12 - 2021", curr: 500 },
  { id: 8, date: "8 - 12 - 2021", curr: 320 },
  { id: 9, date: "9 - 12 - 2021", curr: 500 },
  { id: 10, date: "10 - 12 - 2021", curr: 800 },
  { id: 11, date: "11 - 12 - 2021", curr: 400 },
  { id: 12, date: "12 - 12 - 2021", curr: 900 },
];
const fetchStocks = () => {
  return {
    type: StockListConstants.STOCKLIST_LOADING,
  };
};

const fetchStocksSuccess = (stocks) => {
  return {
    type: StockListConstants.STOCKLIST_SUCCESS,
    payload: stocks,
  };
};
const fetchStockFail = () => {
  return {
    type: StockListConstants.STOCKLIST_FAIL,
  };
};

const GetStocks = () => {
  return async (dispatch) => {
    dispatch(fetchStocks());
    try {
      dispatch(fetchStocksSuccess(stocks));
    } catch (err) {
      dispatch(fetchStockFail());
    }
  };
};

export default GetStocks;
