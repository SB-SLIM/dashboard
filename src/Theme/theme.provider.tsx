import React, { FC } from "react";
import {
  ThemeProvider as ThemeProviderMUI,
  createTheme,
} from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { useSelector } from "react-redux";
import { RootState } from "../App/Redux/store";

const ThemeProvider: FC<any> = (props: any) => {
  const { children } = props;
  const { themeMode } = useSelector((state: RootState) => state.theme);

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );
  return <ThemeProviderMUI theme={theme}>{children}</ThemeProviderMUI>;
};

export default ThemeProvider;
