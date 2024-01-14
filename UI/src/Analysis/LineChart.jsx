import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

function LineChart() {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 5.5, 6],
        backgroundColor: "transparent",
        borderColor: "black",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          // callback: (value)=> value + 'K'
        },
      },
    //   grid: {
    //     boarderDash: [10],
    //   },
    },
  };
  return (
    <div style={{ width: "500px", height: "300px", marginLeft: "20px" }}>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default LineChart;
