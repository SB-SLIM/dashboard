import { Link, TableCell, TableRow as TableRowMUI } from "@mui/material";
import clsx from "clsx";
import useFormatCurrency from "../../../Hooks/useFormatCurrency";
import {
  Avatar,
  Button,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../../ui-components";
import IconButton from "../../../ui-components/IconButton/IconButton";
import { TRow } from "../Table";
import "./tableRow.scss";

function TableRow({
  name,
  address: { city },
  company: { department, color },
  sales,
  pay,
  avgSales,
  commission,
  phone,
  email,
}: TRow) {
  const isSalesUp = () => {
    return sales > avgSales;
  };

  return (
    <TableRowMUI key={name} sx={{ "& td, & th": { border: 0 } }}>
      <TableCell component="th" scope="row" className="flex employee-row">
        <div className="flex">
          <Avatar size="small" />
          {name}
        </div>
      </TableCell>
      <TableCell align="right">{city}</TableCell>
      <TableCell align="right">
        <span
          className="dot-indicators mr-small"
          style={{ backgroundColor: color }}
        />
        {department}
      </TableCell>
      <TableCell align="right">
        <div>{sales} Sales</div>
        <span className={clsx(isSalesUp() ? `clr--success` : "clr--error")}>
          than avg
        </span>
      </TableCell>
      <TableCell align="right">
        <div className="flex commission-row">
          <div>{useFormatCurrency(pay)}</div>
          {commission && (
            <span className="clr--success">{`+${commission} commission`} </span>
          )}
        </div>
      </TableCell>
      <TableCell align="right">
        <div className="flex button-row">
          <Button variant="contained">phone</Button>
          <Button variant="contained">email</Button>
        </div>
      </TableCell>
      <TableCell align="right">
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
      </TableCell>
    </TableRowMUI>
  );
}

export default TableRow;
