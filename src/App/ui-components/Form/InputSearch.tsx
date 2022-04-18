import { Input, InputAdornment, Paper } from "@mui/material";
import IconButton from "../IconButton/IconButton";
import { SearchIcon } from "../Icons";
import "./form.scss";

function InputSearch() {
  return (
    <Input
      id="input-search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon color="black" size="medium" />
        </InputAdornment>
      }
      placeholder="Search"
    />
  );
}

export default InputSearch;
