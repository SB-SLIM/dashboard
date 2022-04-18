import "../icons.scss";
import { IIcon } from "../types";
import { MdArrowDownward } from "react-icons/md";

function ArrowDownWordIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <MdArrowDownward className={classes} />;
}

export default ArrowDownWordIcon;
