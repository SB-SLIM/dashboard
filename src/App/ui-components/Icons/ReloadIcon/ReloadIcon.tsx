import { BsArrowRepeat } from "react-icons/bs";
import "../icons.scss";
import { IIcon } from "../types";

function ReloadIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <BsArrowRepeat className={classes} />;
}

export default ReloadIcon;
