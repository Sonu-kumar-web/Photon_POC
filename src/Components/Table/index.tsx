import React, { useMemo } from "react";
import { StackLayout } from "@salt-ds/core";
import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { defaultData } from "./data";
import { useAgGridHelpers } from "./useAgGridHelpers.ts";
import type { ColDef, ICellRendererParams } from "ag-grid-community";

interface Props extends AgGridReactProps {
  setCurrentSelectedData: (data: any) => void;
  isCardVisible: boolean;
  setIsCardVisible: (isVisible: boolean) => void;
}

const Table = ({ setCurrentSelectedData, setIsCardVisible, ...rest }: Props) => {
  // Using custom hook for Ag-Grid settings
  const { agGridProps, containerProps } = useAgGridHelpers();

  // Memoize columns to prevent re-renders
  const defaultColumns: ColDef[] = useMemo(
    () => [
      {
        headerName: "Name",
        field: "name",
        editable: false,
        flex: 1,
      },
      {
        headerName: "Status",
        field: "status",
        filter: "agSetColumnFilter",
        flex: 1,
      },
      {
        headerName: "ID",
        field: "ID",
        filter: "agSetColumnFilter",
        flex: 1,
      },
      {
        headerName: "Action",
        field: "action",
        cellRenderer: (params: ICellRendererParams) => (
          <div
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              setIsCardVisible(true);
              setCurrentSelectedData(params.data);
            }}
          >
            View
          </div>
        ),
      },
    ],
    [setIsCardVisible, setCurrentSelectedData]
  );

  return (
    <StackLayout style={{ width: "100%" }}>
      <div {...containerProps}>
        <AgGridReact
          {...agGridProps}
          {...rest}
          rowData={defaultData}
          columnDefs={defaultColumns}
          rowSelection="multiple"
        />
      </div>
    </StackLayout>
  );
};

export default Table;
