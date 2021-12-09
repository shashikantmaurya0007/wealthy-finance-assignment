import React from "react";
import { useSelector } from "react-redux";
import "../Styling/calendar.css";
function Calendar() {
  const stocks = useSelector((state) => state.stocksState.stocks);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "60%",
            textAlign: "center",
          }}
        >
          December{" "}
        </h3>
      </div>
      <div className="calendar-grid">
        {stocks?.map((a) => (
          <div className="grid-item">
            <h4>{a.date}</h4>
            <h3>₹{a.curr}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
