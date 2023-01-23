import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Search engine", "Direct", "Email", "Union Ads", "Video Ads"],
  datasets: [
    {
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
      ],
      borderColor: [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        borderRadius: 10,
        boxWidth: 20,
      },
    },
    title: {
      display: false,
      text: "Doughnut Chart",
    },
  },
};

function PieChart() {
  return <Doughnut options={options} data={data} />;
}

export default PieChart;
