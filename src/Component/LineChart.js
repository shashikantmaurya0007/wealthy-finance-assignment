import React, { useState } from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const LineChart = ({ lineChartVariable }) => {
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: [...lineChartVariable[1]],
    },
    series: [{ data: [...lineChartVariable[0]] }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category);
            },
          },
        },
      },
    },
  });

  const updateSeries = () => {
    setChartOptions({
      series: [{ data: [Math.random() * 5, 2, 1] }],
    });
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />{" "}
    </div>
  );
};
export default LineChart;
