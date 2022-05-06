import {
  IconButton,
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
  image,
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

  return (
    <TableRowMUI sx={{ "& td, & th": { border: 0 } }} className="row">
      <TableCell component="th" scope="row">
        <div className="flex">
          <Avatar size="small" src={image} alt={name} />
          {name && name}
        </div>
      </TableCell>
      <TableCell align="right">{address?.city}</TableCell>
      <TableCell align="right">
        <div className=" w-mc row">
          <span
            className="dot-indicators mr-small"
            style={{ backgroundColor: company?.color }}
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
      <TableCell align="right"></TableCell>
      <TableCell align="right"></TableCell>
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
