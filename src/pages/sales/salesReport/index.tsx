import React from "react";
import "./style.css";
import TableComp from "../../../components/commonComponent/ListTable/ListTable";
import {
  listRowHeading,
  salesDashboardList,
  statusRowHeading,
} from "./../dashboard/dashboard.const";

function SalesReportList() {
  return (
    <div className="sales-report-container">
      <TableComp
        rows={salesDashboardList}
        statusRowsHeading={statusRowHeading}
        listRowHeading={listRowHeading}
        flag="dashboard"
      />
    </div>
  );
}

export default SalesReportList;
