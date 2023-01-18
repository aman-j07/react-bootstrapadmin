import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: false,
      text: "Line Chart",
    },
  },
};

const labels = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00"];

export const data = {
  labels,
  datasets: [
    {
      label: "Customers",
      data: [78, 19, 58, 29, 81, 30],
      borderColor: "#ff771d",
      backgroundColor: "#ff771d",
      tension: 0.4,
    },
    {
      label: "Sales",
      data: [54, 41, 66, 55, 13, 19],
      borderColor: "#4154f1",
      backgroundColor: "#4154f1",
      tension: 0.4,
    },
    {
      label: "Revenue",
      data: [15, 52, 21, 42, 30, 15],
      borderColor: "#2eca6a",
      backgroundColor: "#2eca6a",
      tension: 0.4,
    },
  ],
};

const LineChart = () => {
  console.log(data);
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
