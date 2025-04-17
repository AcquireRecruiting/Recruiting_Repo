/* eslint-disable */
import * as React from "react";
import { Flex, Heading } from "@aws-amplify/ui-react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import NavBarSide from "../ui-components/NavBarSide";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function Dashboard() {
  // Bar Chart Data: Active Connections
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Professional Connections",
        data: [100, 120, 90, 150, 130, 170],
        backgroundColor: "#3182CE",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "#333",
        font: { weight: "bold" },
        formatter: (value) => value,
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Pie Chart 1: Active Users
  const pieDataActiveUsers = {
    labels: ["Active", "Inactive", "Pending"],
    datasets: [
      {
        label: "Users",
        data: [180, 60, 30],
        backgroundColor: ["#38A169", "#CBD5E0", "#ED8936"],
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart 2: Users in Training
  const pieDataTraining = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        label: "Training Status",
        data: [80, 50, 40],
        backgroundColor: ["#4FD1C5", "#F6AD55", "#E53E3E"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      datalabels: {
        color: "#fff",
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${value}`;
        },
      },
    },
  };

  return (
    <Flex direction="row" height="100vh">
      {/* Sidebar */}
      <Flex
        direction="column"
        width="240px"
        backgroundColor="#f4f4f4"
        padding="1rem"
        borderRight="1px solid #ccc"
      >
        <NavBarSide />
      </Flex>

      {/* Main Content */}
      <Flex gap="2rem" flexWrap="wrap" padding="2rem">
        <Flex direction="column" width="100%" maxWidth="600px">
          <Heading level={4} marginBottom="1rem">Active Connections</Heading>
          <Bar data={barData} options={barOptions} plugins={[ChartDataLabels]} />
        </Flex>

        <Flex direction="column" width="100%" maxWidth="400px">
          <Heading level={4} marginBottom="1rem">Active Users</Heading>
          <Pie data={pieDataActiveUsers} options={pieOptions} plugins={[ChartDataLabels]} />
        </Flex>

        <Flex direction="column" width="100%" maxWidth="400px">
          <Heading level={4} marginBottom="1rem">Users in Training</Heading>
          <Pie data={pieDataTraining} options={pieOptions} plugins={[ChartDataLabels]} />
        </Flex>
      </Flex>
    </Flex>
  );
}