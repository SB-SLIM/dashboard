import { MdShare } from "react-icons/md";
import { GrShare } from "react-icons/gr";
import "../icons.scss";
import { IIcon } from "../types";

function ShareIcon({ variant = 1, size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  if (variant === 2) {
    return <GrShare className={classes} />;
  }

  return <MdShare className={classes} />;
}

export default ShareIcon;
