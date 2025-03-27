import type { ReactElement } from "react";
import { useState, useLayoutEffect } from "react";
import { getAreaChartData } from "../AGChart/data";
import { Dropdown, Option } from "@salt-ds/core";
import { AGChartAdaptor } from "../AGChart";

import { AREA_CHART_CONFIG } from "../../config/AGChart";

const chartValues = [10, 20, 30, 40, 50, 1000];

interface SelectedChartData {
  date: string;
  amount: number;
}

const AreaChart = (): ReactElement => {
  const [currentSelectedGraphValue, setCurrentSelectedGraphValue] =
    useState<string>("15");
  const [currentSelectedChartNodeData, setCurrentSelectedChartNodeData] =
    useState<SelectedChartData>({
      date: "",
      amount: 0,
    });

  const handleAreaChartClick = (event: any) => {
    setCurrentSelectedChartNodeData(event.datum);
  };

  const [areaChartData, setAreaChartData] = useState<object>({});

  useLayoutEffect(() => {
    const getData = async ()=>{
      setAreaChartData({
        ...AREA_CHART_CONFIG,
        data: await getAreaChartData(currentSelectedGraphValue),
        listeners: {
          seriesNodeClick: handleAreaChartClick,
        },
      });
    }
    getData()
  }, [currentSelectedGraphValue]);

  return (
    <div>
      <Dropdown
        style={{ width: "266px" }}
        value={currentSelectedGraphValue}
        onSelectionChange={(e, newSelected) => {
          setCurrentSelectedGraphValue(newSelected[0]);
        }}
      >
        {chartValues.map((value) => (
          <Option value={value} key={value} />
        ))}
      </Dropdown>
      <AGChartAdaptor options={areaChartData} />
      <div>
        <h3>Selected Node Data</h3>
        {currentSelectedChartNodeData.date !== "" && (
          <pre>{JSON.stringify(currentSelectedChartNodeData, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};
export default AreaChart;
