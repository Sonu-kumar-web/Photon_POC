import { useState } from "react";
import type { ReactElement } from "react";

import Header from "./Components/Header";

import AreaChart from "./Components/AreaChart";
import PieChart from "./Components/PieChart";

const Sentiment = (): ReactElement => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<number>(0);

  return (
    <>
      <Header
        currentSelectedTab={currentSelectedTab}
        setCurrentSelectedTab={setCurrentSelectedTab}
      />

      {currentSelectedTab === 0 && <AreaChart />}

      {currentSelectedTab === 1 && <PieChart />}
    </>
  );
};

export default Sentiment;
