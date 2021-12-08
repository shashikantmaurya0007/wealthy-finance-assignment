import { combineReducers } from "redux";
import stockReducer from "./Stocks.js";

const rootReducer = combineReducers({
    stocksState: stockReducer,
});

export default rootReducer;