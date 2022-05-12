import { Badge } from "@mui/material";
import { Button, ReloadIcon, Typography } from "../../../ui-components";
import "./employees.scss";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../../Redux/Employees/employees.thunks";
import { useEffect } from "react";
import { RootState } from "../../../Redux/store";
import AddEmployeeFrom from "../../../Components/Employees/AddEmployee/AddEmployeeForm";
import { closeModal, openModal } from "../../../Redux/Modal/modal.slice";
import Modal from "../../../ui-components/Modal/Modal";
import { DataGrid } from "@mui/x-data-grid";
import { employeesColumns } from "./employeesDataSource";

function Employees() {
  const { data, isLoading } = useSelector(
    (state: RootState) => state.employees
  );
  const { isOpen } = useSelector((state: RootState) => state.modal);
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
            disabled={isLoading}
          >
            reload
          </Button>
          <Button
            variant="outlined"
            size="small"
            disabled={isLoading}
            onClick={() => dispatch(openModal())}
          >
            New
          </Button>
          <Modal
            setOpen={() => dispatch(closeModal())}
            open={isOpen}
            label="Add new employee"
          >
            <AddEmployeeFrom />
          </Modal>
        </div>
      </div>
      <div className="employees-root_body">
        <DataGrid
          rowsPerPageOptions={[5, 10, 20, 100]}
          columns={employeesColumns}
          rows={data}
        />
      </div>
    </div>
  );
}

export default Employees;
