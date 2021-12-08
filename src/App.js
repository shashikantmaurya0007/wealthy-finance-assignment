import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import GetStocks from "./Redux/Actions/StockList";
import Home from "./Pages/Home";

function App() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocksState.stocks);
  useEffect(() => {
    dispatch(GetStocks());
  }, [dispatch]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
