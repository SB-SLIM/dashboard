import { MdOutlineSettings } from "react-icons/md";
import "../icons.scss";
import { IIcon } from "../types";

function SettingIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <MdOutlineSettings className={classes} />;
}

export default SettingIcon;
