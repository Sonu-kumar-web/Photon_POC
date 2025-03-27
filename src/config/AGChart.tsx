import { AgChartOptions } from "ag-charts-community";

export const AREA_CHART_CONFIG: AgChartOptions = {
    title: { text: "Area Chart" },
        height: 400,
        series: [
          {
            type: "area",
            xKey: "date",
            yKey: "amount",
            yName: "Amount",
            stroke: "red",
            strokeWidth: 1,
            fill: "pink",
            marker: {
              enabled: false,
              fill: "red",
            },
            interpolation: { type: "smooth" },
          },
        ],
  };

export const PIE_CHART_CONFIG: AgChartOptions = {
        title: {
          text: "Portfolio Composition",
        },
        height: 500,
        width: 500,
        series: [
          {
            type: "pie",
            angleKey: "amount",
            calloutLabelKey: "asset",
            sectorLabelKey: "amount",
            sectorLabel: {
              color: "white",
              fontWeight: "bold",
              formatter: ({ value }: { value: number }) =>
                `$${(value / 1000).toFixed(0)}K`,
            },
          },
        ],
}