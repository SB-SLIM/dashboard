import "../icons.scss";
import { IIcon } from "../types";
import { IoCalendarNumberOutline } from "react-icons/io5";

function CalendarIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <IoCalendarNumberOutline className={classes} />;
}

export default CalendarIcon;
