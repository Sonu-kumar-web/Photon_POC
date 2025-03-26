import type { ReactElement } from "react";
import { useState, useMemo } from "react";
import { getAreaChartData } from "../AGChart/data";
import { Dropdown, Option } from "@salt-ds/core";
import AGChart from "../AGChart";

const chartValues = [10, 20, 30, 40, 50, 1000];

interface SelectedChartData {
  value: string;
  subscriptions: number;
  services: number;
}

const AreaChart = (): ReactElement => {
  const [currentSelectedGraphValue, setCurrentSelectedGraphValue] =
    useState<string>("15");
  const [currentSelectedChartNodeData, setCurrentSelectedChartNodeData] =
    useState<SelectedChartData>({
      value: "",
      subscriptions: 0,
      services: 0,
    });

  const handleAreaChartClick = (event: any) => {
    setCurrentSelectedChartNodeData(event.datum);
  };

  const [areaChartData, setAreaChart] = useState<object>({
    title: { text: "Area Chart" },
    data: getAreaChartData(Number(currentSelectedGraphValue)),
    height: 400,
    series: [
      {
        type: "area",
        xKey: "value",
        yKey: "services",
        yName: "Services",
        stroke: "red",
        strokeWidth: 1,
        fill: "pink",
        marker: {
          enabled: false,
          fill: "red",
        },
        interpolation: { type: "smooth" },
      },
      {
        type: "area",
        xKey: "value",
        yKey: "subscriptions",
        yName: "Subscriptions",
        stroke: "Green",
        strokeWidth: 1,
        lineDash: [3, 4],
        fill: "lightGreen",
        marker: {
          enabled: false,
          fill: "Green",
        },
        interpolation: { type: "smooth" },
      },
    ],
    listeners: {
      seriesNodeClick: handleAreaChartClick,
    },
  });

  useMemo(() => {
    setAreaChart({
      ...areaChartData,
      data: getAreaChartData(Number(currentSelectedGraphValue)),
    });
  }, [currentSelectedGraphValue]);

  return (
    <div>
      <Dropdown
        style={{ width: "266px" }}
        value={currentSelectedGraphValue}
        onSelectionChange={(e, newSelected) => {
          console.log("e***", newSelected);
          setCurrentSelectedGraphValue(newSelected[0]);
        }}
      >
        {chartValues.map((value) => (
          <Option value={value} key={value} />
        ))}
      </Dropdown>
      <AGChart options={areaChartData} />
      <div>
        <h3>Selected Node Data</h3>
        {currentSelectedChartNodeData.value !== "" && (
          <pre>{JSON.stringify(currentSelectedChartNodeData, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};
export default AreaChart;
