import "../icons.scss";
import { IIcon } from "../types";
import { MdClose } from "react-icons/md";

function CloseIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <MdClose className={classes} />;
}

export default CloseIcon;
