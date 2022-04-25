import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import styles from "../scss/abstracts/_variables.module.scss";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "dark"
        ? { main: styles.primaryDark }
        : { main: styles.primary }),
    },
    secondary: {
      ...(mode === "dark"
        ? { main: styles.secondaryLight }
        : { main: styles.secondary }),
    },
    ...(mode === "dark"
      ? {
          background: {
            default: styles.bodyBgColorDark,
          },
        }
      : {
          background: {
            default: styles.bodyBgColor,
          },
        }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
          }),
    },
  },
  shape: {
    borderRadius: styles.borderRadius,
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "18px",
          borderRadius: styles.progressBarBorderRadius,
        },
        barColorPrimary: "#fff176",
        dashed: {
          background: "#eaeaea",
          animation: "none",
        },
        bar1Buffer: {
          borderRadius: "inherit",
          ...(mode === "light"
            ? { background: styles.clrProgressBar }
            : { background: styles.clrProgressBarDark }),
        },
        bar2Buffer: {
          borderRadius: "inherit",
        },
      },
    },
  },
});
