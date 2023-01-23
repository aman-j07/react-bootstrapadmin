import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    "Sales",
    "Marketing",
    "Development",
    "Customer Support",
    "Technology",
    "Administration",
  ],
  datasets: [
    {
      label: "Allocated Budget",
      data: [5, 9, 6, 4, 1, 8],
      backgroundColor: "#5470c6",
      borderColor: "#5470c6",
      borderWidth: 1,
      fill: false,
    },
    {
      label: "Actual Spending",
      data: [8, 9, 8, 7, 8, 7],
      backgroundColor: "#91cc75",
      borderColor: "#91cc75",
      borderWidth: 1,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels:{
        borderRadius:10,
        boxWidth:20
      }
    },
    title: {
      display: false,
      text: "Radar Chart",
    },
  },
};

function RadarChart() {
  return <Radar data={data} options={options} />;
}

export default RadarChart;
