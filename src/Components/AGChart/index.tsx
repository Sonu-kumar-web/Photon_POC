import { ReactElement, memo } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";

interface ChartExampleProps {
  options: AgChartOptions;
}

const ChartExample = ({ options }: ChartExampleProps): ReactElement => {
  const chartOptions: AgChartOptions = {
    // We can add default options here
    ...options,
  };

  // Use Styled components
  return (
      <AgCharts options={chartOptions} />
  );
};

export default memo(ChartExample);
