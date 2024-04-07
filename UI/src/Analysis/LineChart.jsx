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

function LineChart({ graphData }) {
  console.log('main graph data: ', graphData)
  let data = {};

  if (
    graphData &&
    "date" in graphData &&
    "values" in graphData
  ) {
    data = {
      labels: graphData["date"],
      datasets: [
        {
          data: graphData["values"],
          backgroundColor: "transparent",
          borderColor: "black",
          pointBorderColor: "transparent",
          pointBorderWidth: 4,
        },
      ],
    };
  }

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
        // min: 0,
        // max: 10,
        // ticks: {
        //   stepSize: 2,
        //   // callback: (value)=> value + 'K'
        // },
      },
      //   grid: {
      //     boarderDash: [10],
      //   },
    },
  };

  return (
    <>
    {graphData && 'values' in graphData ?
    <div style={{ width: "500px", height: "300px", marginLeft: "20px" }}>
      <Line data={data} options={options}></Line>
    </div>: <>Loading...</>}
    </>
  );
}

export default LineChart;
