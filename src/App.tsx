import { lazy, Suspense, useState } from "react";
import type { ReactElement } from "react";

import Header from "./Components/Header";

const AreaChart = lazy(() => import("./Components/AreaChart"));
const PieChart = lazy(() => import("./Components/PieChart"));



const App = (): ReactElement => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<number>(0);

  return (
    <>
      <Header
        currentSelectedTab={currentSelectedTab}
        setCurrentSelectedTab={setCurrentSelectedTab}
      />

      {currentSelectedTab === 0 && <Suspense fallback={<div>Loading...</div>}><AreaChart /></Suspense>} 

      {currentSelectedTab === 1 && <Suspense fallback={<div>Loading...</div>}><PieChart /></Suspense>}
    </>
  );
};

export default App;
