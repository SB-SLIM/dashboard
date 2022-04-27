import { Badge } from "@mui/material";
import { Button, ReloadIcon, Typography } from "../../../ui-components";
import "./employees.scss";
import { Table } from "../../../Components";
import { sortEmployees } from "../../../Redux/Employees/employees.reducer";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../Redux/Employees/employees.actions";
import { useCallback, useEffect } from "react";
import { RootState } from "../../../Redux/store";

function Employees() {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.employees
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(getEmployees());

    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort();
    };
  }, []);

  return (
    <div className="employees-root">
      <div className="employees_header boxHeader">
        <div className="boxHeader_left">
          <Typography variant="h6" className="text-capitalize">
            employees
          </Typography>
          <Badge badgeContent={data.length} color="secondary" />
        </div>
        <div className="boxHeader_left">
          <Button
            startIcon={<ReloadIcon color="primary" size="large" />}
            variant="text"
            size="small"
            onClick={() => dispatch(sortEmployees("asc"))}
          >
            reload
          </Button>
          <Button variant="outlined" size="small">
            New
          </Button>
        </div>
      </div>
      <div className="employees_body">
        <Table data={data} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}

export default Employees;
