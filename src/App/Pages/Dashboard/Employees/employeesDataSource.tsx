import "./tableRow.scss";
import { Button, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import {
  Avatar,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../../ui-components";
import clsx from "clsx";
import useFormatCurrency from "../../../Hooks/useFormatCurrency";

export const employeesColumns: GridColDef[] = [
  { field: "id", hide: true },
  {
    field: "name",
    headerName: "Employee",
    width: 180,
    renderCell: (params) => {
      const { picture, name } = params.row;
      return (
        <div className="flex">
          <Avatar size="small" src={picture.thumbnail} alt={name} />
          {name && name}
        </div>
      );
    },
  },
  {
    field: "location",
    headerName: "Location",
    width: 134,
    renderCell: (params) => {
      const { address } = params.row;
      return <div className="flex">{address?.city}</div>;
    },
  },
  {
    field: "department",
    headerName: "Department",
    width: 134,
    renderCell: (params) => {
      const { company } = params.row;
      return (
        <div className=" w-mc row">
          <span
            className="dot-indicators mr-small"
            style={{ backgroundColor: company?.department.color }}
          />
          {company?.department.name}
        </div>
      );
    },
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 135,
    renderCell: (params) => {
      const { sales } = params.row;
      return (
        <div className=" w-mc row">
          <div>{sales} Sales</div>
          <span className={clsx(sales > 0 ? `clr--success` : "clr--error")}>
            than avg
          </span>
        </div>
      );
    },
  },
  {
    field: "pay",
    headerName: "Pay (YTD)",
    width: 135,
    renderCell: (params) => {
      const { commission, pay } = params.row;
      return (
        <div className="w-mc row">
          <div>{useFormatCurrency(pay)}</div>
          {commission && (
            <span className="clr--success">{`+${commission} commission`} </span>
          )}
        </div>
      );
    },
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 175,
    renderCell: (params) => {
      return (
        <div className="flex row__button">
          <Button variant="contained">phone</Button>
          <Button variant="contained">email</Button>
        </div>
      );
    },
  },
  {
    field: "social",
    headerName: "Social",
    width: 156,
    renderCell: (params) => {
      return (
        <div className="flex social-row">
          <IconButton>
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
          <IconButton>
            <LinkedinIcon color="primary" />
          </IconButton>
        </div>
      );
    },
  },
];
