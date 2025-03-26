import type { ColDef } from "ag-grid-community";
import React from "react";

export const defaultColumns: ColDef[] = [
  {
    headerName: "Name",
    field: "name",
    editable: false,
    flex:1,
  },
  {
    headerName: "Status",
    field: "status",
    filter: "agSetColumnFilter",
    flex:1,
  },
  {
    headerName: "ID",
    field: "ID",
    filter: "agSetColumnFilter",
    flex:1,
  },
  {
    headerName: 'Action',
    field: 'action',
    cellRenderer: (params) => {
      // Custom button inside a cell
      return React.createElement('div', ({style:{color:"blue", cursor:"pointer"}, onClick: () => {console.log("params***", params)}}), 'View');
    },
  },
];