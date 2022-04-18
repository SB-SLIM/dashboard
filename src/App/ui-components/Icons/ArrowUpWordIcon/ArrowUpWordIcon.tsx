import "../icons.scss";
import { IIcon } from "../types";
import { MdArrowUpward } from "react-icons/md";

function ArrowUpWordIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <MdArrowUpward className={classes} />;
}

export default ArrowUpWordIcon;
