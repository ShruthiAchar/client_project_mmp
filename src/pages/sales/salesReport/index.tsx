import React from "react";
import "./style.css";
import TableComp from "../../../components/commonComponent/ListTable/ListTable";
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from "./../dashboard/dashboard.const";
import { withRouter } from "react-router-dom";
// import { Button } from "@mui/material";

function SalesReportList(props: any) {
  return (
    <div className="sales-report-container">
      {/* <Button
        onClick={() =>
          props?.history?.push(`${props.match?.path}/newOrganisationReport`)
        }
      >
        click
      </Button> */}
      <TableComp
        rows={salesDashboardList}
        statusRowsHeading={statusRowHeading}
        listRowHeading={listRowHeading}
        flag="dashboard"
      />
    </div>
  );
}

export default withRouter(SalesReportList);
