import "../icons.scss";
import { IIcon } from "../types";
import { MdKeyboardArrowDown } from "react-icons/md";

function ArrowDownIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <MdKeyboardArrowDown className={classes} />;
}

export default ArrowDownIcon;
