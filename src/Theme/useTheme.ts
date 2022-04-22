import ThemeContext from "./theme.context";
import React from "react";

const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default useTheme;
