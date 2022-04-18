import "../icons.scss";
import { IIcon } from "../types";
import { AiOutlineLinkedin } from "react-icons/ai";

function LinkedinIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <AiOutlineLinkedin className={classes} />;
}

export default LinkedinIcon;
