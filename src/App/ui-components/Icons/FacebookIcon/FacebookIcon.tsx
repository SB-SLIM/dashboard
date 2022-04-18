import "../icons.scss";
import { IIcon } from "../types";
import { AiOutlineFacebook } from "react-icons/ai";

function FacebookIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <AiOutlineFacebook className={classes} />;
}

export default FacebookIcon;
