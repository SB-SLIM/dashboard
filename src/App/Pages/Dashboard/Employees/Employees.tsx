import { Badge } from "@mui/material";
import React from "react";
import { Button, ReloadIcon, Typography } from "../../../ui-components";
import "./employees.scss";
import { Table } from "../../../Components";

function Employees() {
  return (
    <div className="employees-root">
      <div className="employees_header boxHeader">
        <div className="boxHeader_left">
          <Typography variant="h6" className="text-capitalize">
            employees
          </Typography>
          <Badge badgeContent={"2"} color="secondary" />
        </div>
        <div className="boxHeader_left">
          <Button
            startIcon={<ReloadIcon color="primary" size="large" />}
            variant="text"
            size="small"
          >
            reload
          </Button>
          <Button variant="outlined" size="small">
            New
          </Button>
        </div>
      </div>
      <div className="employees_body">
        <Table />
      </div>
    </div>
  );
}

export default Employees;
