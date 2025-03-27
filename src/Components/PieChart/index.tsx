import type { ReactElement } from "react";
import { useState } from "react";
import {AGChartAdaptor} from "../AGChart";
import { pieChartData } from "../AGChart/data";

import {PIE_CHART_CONFIG} from "../../config/AGChart";

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
    ...PIE_CHART_CONFIG,
    data: pieChartData(),
    listeners: {
      seriesNodeClick: handlePieChartClick,
    },
  });

  return (
    <div>
      <AGChartAdaptor options={pieChartOption} />
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
