import {memo, ComponentType} from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

interface AgChartProps {
  options: AgChartOptions;
}


const Wrapper =
  (AGChartComponent: ComponentType<AgChartProps>) =>
  (props: any) => {
    return <AGChartComponent {...props} />;
  };

export const AGChartAdaptor = memo(Wrapper(AgCharts));

