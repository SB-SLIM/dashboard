import { Input, InputProps } from "@mui/material";
import { ArrowDownIcon } from "../Icons";
import Typography from "../Typography";
import "./datePiker.scss";

interface IDatePicker {
  title?: "from" | "to";
}

function DatePiker({ title = "from" }: InputProps & IDatePicker) {
  return (
    <div className="datePiker ">
      <Typography
        variant="subtitle2"
        color="primary"
        className="datePiker_title"
      >
        {title}
      </Typography>
      <input type="date" name="date" />
      <div className="input_icon bg--primary">
        <ArrowDownIcon />
      </div>
    </div>
  );
}

export default DatePiker;
