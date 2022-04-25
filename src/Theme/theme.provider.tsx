import React, { FC } from "react";
import {
  ThemeProvider as ThemeProviderMUI,
  createTheme,
} from "@mui/material/styles";
import ThemeContext from "./theme.context";

import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "./theme";

const ThemeProvider: FC<any> = (props: any) => {
  const { children } = props;
  const [modeTheme, setModeTheme] = React.useState<"light" | "dark">("light");

  const setMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setModeTheme((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
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
