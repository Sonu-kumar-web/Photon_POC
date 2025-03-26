import React from "react";
import { AgGridReact } from "ag-grid-react";
import { GridOptions } from "ag-grid-community";
import { defaultGridOptions } from "../../Config/AgGridConfig";
import { GridItem } from "@salt-ds/core";
 
 
export interface WithAgGridProps extends GridOptions {
  className?: string;
}
 
export const withAgGrid = (
  WrappedComponent: React.ComponentType<WithAgGridProps>
) => {
  return (props: any) => {
    const gridOptions: any = {
      ...defaultGridOptions,
      ...props,
    };
 
    return (
      <GridItem style={{ width: "100%", height: "500px" }}>
        <WrappedComponent {...gridOptions} />
      </GridItem>
    );
  };
};
 
export const JPMCAGGrid = withAgGrid(AgGridReact);
 