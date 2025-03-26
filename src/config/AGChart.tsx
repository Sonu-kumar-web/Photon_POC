import { AgChartOptions } from "ag-charts-community";

export const DAILY_TRANSACTION_CONFIG: AgChartOptions = {
    title: {
      text: "Daily Transactions",
    },
    subtitle: {
      text: "",
    },
    //   todo: take chart data from view (dashboard in this case)
    //   data: chartData,
    series: [
      {
        type: "area",
        xKey: "date",
        yKey: "amount",
        yName: "Amount",
        stroke: "#2196F3",
        marker: {
          fill: "#2196F3",
          stroke: "#2196F3",
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        title: {
          text: "Date",
        },
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Amount ($)",
        },
        label: {
          formatter: (params: { value: number }) => {
            return `$${params.value}`;
          },
        },
      },
    ],
    legend: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
  };