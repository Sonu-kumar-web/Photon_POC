import type { ReactElement } from "react";
import { useState } from "react";
import AGChart from "../AGChart";
import { pieChartData } from "../AGChart/data";

interface SelectedChartData {
  asset: string;
  amount: number;
}

const PieChartData = (): ReactElement => {
  const [currentSelectedChartNodeData, setCurrentSelectedChartNodeData] =
    useState<SelectedChartData>({
      asset: "",
      amount: 0,
    });

  const handlePieChartClick = (event: any) => {
    setCurrentSelectedChartNodeData(event.datum);
  };

  const [pieChartOption, setPieOption] = useState<object>({
    data: pieChartData(),
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
        seriesNodeClick: (event: any) => {
          console.log("Clicked node:", event);
        },
      },
    ],
    listeners: {
      seriesNodeClick: handlePieChartClick,
    },
  });

  return (
    <div>
      <AGChart options={pieChartOption} />
      <div>
        <h3>Selected Node Data</h3>
        {currentSelectedChartNodeData.asset !== "" && (
          <pre>{JSON.stringify(currentSelectedChartNodeData, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default PieChartData;
