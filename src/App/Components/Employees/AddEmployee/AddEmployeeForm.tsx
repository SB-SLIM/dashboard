import { Box, Button, TextField } from "@mui/material";
import { closeModal } from "../../../Redux/Modal/modal.slice";
import "./addEmployeeFrom.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { addEmployee } from "../../../Redux/Employees/employees.thunks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";

export interface IEmployee {
  name: string;
  email: string;
  phone: number;
}

function AddEmployeeForm() {
  //FIXME: create redux form and delete this line
  const { isError, errorMsg } = { isError: false, errorMsg: "test error msg" };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IEmployee>();

  const formData = useSelector((state: RootState) => state.employees);
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<IEmployee> = (data) => {
    dispatch(addEmployee(data));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      className="form "
    >
      <div className="form__body flow">
        <TextField
          id="name"
          type="text"
          label="name"
          {...register("name")}
          fullWidth
          error={isError}
          helperText={errorMsg}
        />
        <TextField
          id="email"
          type="email"
          label="email"
          {...register("email")}
          fullWidth
          error={errors !== undefined}
          helperText={errors && errorMsg}
        />
        <TextField
          id="phone"
          type="tel"
          label="phone"
          {...register("phone")}
          fullWidth
          error={isError}
          helperText={errorMsg}
        />
      </div>
      <Box className="form_button" bgcolor={"background.default"}>
        <Button variant="contained" color="error">
          cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default AddEmployeeForm;
