import { Box, Input, InputProps, useTheme } from "@mui/material";
import { ArrowDownIcon } from "../Icons";
import Typography from "../Typography";
import "./datePiker.scss";

interface IDatePicker {
  title?: "from" | "to";
}

function DatePiker({ title = "from" }: InputProps & IDatePicker) {
  const theme = useTheme();

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
      <Box
        className="input_icon"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <ArrowDownIcon />
      </Box>
    </div>
  );
}

export default DatePiker;
