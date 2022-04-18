import { MdOutlineSearch } from "react-icons/md";
import "../icons.scss";
import { IIcon } from "../types";

function SearchIcon({ size = "medium", color = "white" }: IIcon) {
  const classes = `icon--${color} icon--${size}`;

  return <MdOutlineSearch className={classes} />;
}

export default SearchIcon;
