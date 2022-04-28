import {
  Table as TableMUI,
  TableRow as TableRowMUI,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Skeleton,
} from "@mui/material";
import TableRow from "./TableRow";

// const data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulak Light",
//       suite: "Apt. 556",
//       city: "Gainsborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       department: "marketing",
//       color: "#f0f",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//     sales: 250,
//     avgSales: 300,
//     pay: 3600,
//     commission: 50,
//   },
// ];
export interface IDataEmployee {
  id?: string | number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    department: string;
    color: string;
    catchPhrase: string;
    bs: string;
  };
  sales?: number;
  avgSales?: number;
  pay?: number;
  commission?: number;
}

//FIXME: type check
function Table({ data, isLoading, error }: any) {
  const dataIsLoading: Array<React.ReactElement> = [];

  for (let i = 0; i < 5; i++) {
    dataIsLoading.push(<TableRow key={i} isLoading={isLoading} />);
  }

  return (
    <TableContainer>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRowMUI>
            <TableCell>Employees</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Sales</TableCell>
            <TableCell align="right">Pay(YTD)</TableCell>
            <TableCell align="right">contact</TableCell>
            <TableCell align="right">Social</TableCell>
          </TableRowMUI>
        </TableHead>
        <TableBody>
          {!isLoading
            ? data.map((row: IDataEmployee) => (
                <TableRow key={row.id} {...row} />
              ))
            : dataIsLoading}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
}
                  

export default Table;
