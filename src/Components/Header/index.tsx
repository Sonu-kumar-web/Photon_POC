import type { ReactElement } from "react";
import { StackLayout } from "@salt-ds/core";
import {
  TabBar,
  TabListNext,
  TabNext,
  TabNextTrigger,
  TabsNext,
} from "@salt-ds/lab";

const tabs = ["Area Chart","Pie Chart"];

interface HeaderProps {
  currentSelectedTab: number;
  setCurrentSelectedTab: (tab: number) => void;
}

const Header = ({
  currentSelectedTab,
  setCurrentSelectedTab,
}: HeaderProps): ReactElement => (
  <header 
  style={{ backgroundColor: "black", color: "white", padding: "1rem" }} 
  // className="bg-blue-500"
   >
    <h2>J.P Morgan | Graphite</h2>
    <StackLayout>
      <TabsNext defaultValue={`${currentSelectedTab}`}>
        <TabBar>
          <TabListNext appearance="bordered" >
            {tabs.map((label, index) => (
              <TabNext
                value={label}
                key={label}
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => setCurrentSelectedTab(index)}
                
              >
                <TabNextTrigger>{label}</TabNextTrigger>
              </TabNext>
            ))}
          </TabListNext>
        </TabBar>
      </TabsNext>
    </StackLayout>
  </header>
);

export default Header;
