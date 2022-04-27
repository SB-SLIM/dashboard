import {
  Link,
  Skeleton,
  TableCell,
  TableRow as TableRowMUI,
} from "@mui/material";
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
import { IDataEmployee } from "../Table";
import "./tableRow.scss";

interface ISkeleton {
  isLoading?: boolean;
}

type TTableRow = ISkeleton & IDataEmployee;

function TableRow({
  name,
  address,
  company,
  sales = 150,
  pay = 150,
  avgSales = 120,
  commission = 12,
  phone,
  website,
  isLoading,
}: TTableRow) {
  const color = company?.color || "green";

  const isSalesUp = () => {
    return sales > avgSales;
  };

  if (isLoading) {
    return <RowIsLoading />;
  }

  if (address) {
    console.log(address.city);
  }

  return (
    <TableRowMUI sx={{ "& td, & th": { border: 0 } }} className="row">
      <TableCell component="th" scope="row">
        <div className="flex">
          <Avatar size="small" />
          {name && name}
        </div>
      </TableCell>
      <TableCell align="right">{address?.city}</TableCell>
      <TableCell align="right">
        <div className=" w-mc row">
          <span
            className="dot-indicators mr-small"
            style={{ backgroundColor: color }}
          />
          {company?.name}
        </div>
      </TableCell>
      <TableCell align="right">
        <div className=" w-mc row">
          <div>{sales} Sales</div>
          <span className={clsx(isSalesUp() ? `clr--success` : "clr--error")}>
            than avg
          </span>
        </div>
      </TableCell>
      <TableCell align="right">
        <div className="w-mc row">
          <div>{useFormatCurrency(pay)}</div>
          {commission && (
            <span className="clr--success">{`+${commission} commission`} </span>
          )}
        </div>
      </TableCell>
      <TableCell align="right">
        <div className="flex row__button">
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

const RowIsLoading = () => (
  <TableRowMUI sx={{ "& td, & th": { border: 0 } }} className="row">
    <TableCell component="th" scope="row">
      <div className="flex">
        <Skeleton variant="circular">
          <Avatar size="small" />
        </Skeleton>
        <Skeleton variant="text" width="100%" />
      </div>
    </TableCell>
    <TableCell align="right">
      <Skeleton variant="text" width="100%" />
    </TableCell>
    <TableCell align="right">
      <Skeleton variant="text" width="100%" />
    </TableCell>
    <TableCell align="right">
      <Skeleton variant="text" width="100%" />
    </TableCell>
    <TableCell align="right">
      <Skeleton variant="text" width="100%" />
    </TableCell>
    <TableCell align="right">
      <Skeleton variant="text" width="100%" />
    </TableCell>
    <TableCell align="right">
      <Skeleton variant="text" width="100%" />
    </TableCell>
  </TableRowMUI>
);

export default TableRow;
