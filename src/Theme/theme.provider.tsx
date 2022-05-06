import React, { FC, useEffect } from "react";
import {
  ThemeProvider as ThemeProviderMUI,
  createTheme,
} from "@mui/material/styles";
import ThemeContext from "./theme.context";

import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "./theme";
import useLocaleStorage from "../App/Hooks/useLocaleStorage";

const ThemeProvider: FC<any> = (props: any) => {
  const { children } = props;
  const [modeTheme, setModeTheme] = useLocaleStorage<"light" | "dark">(
    "theme",
    "dark"
  );

  const setMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setModeTheme((prevMode: PaletteMode) => {
          return prevMode === "light" ? "dark" : "light";
        });
      },
    }),
    [modeTheme]
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(modeTheme)),
    [modeTheme]
  );

  return (
    <ThemeProviderMUI theme={theme}>
      <ThemeContext.Provider value={setMode}>{children}</ThemeContext.Provider>
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
