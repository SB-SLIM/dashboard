import { PaletteMode, PaletteOptions, ThemeOptions } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import { createTheme as createThemeMUI } from "@mui/material/styles";
import { PartialTypeObject } from "@mui/material/styles/createPalette";
import styles from "../scss/abstracts/_variables.module.scss";

// const themeOptions: any = [
//   {
//     palette: {
//       mode: "light",
//       primary: {
//         main: styles.primary,
//         light: styles.primaryLight,
//         dark: styles.primaryDark,
//         contrastText: "rgba(255,255,255,0.87)",
//       },
//       secondary: {
//         main: styles.secondary,
//         light: styles.secondaryLight,
//         dark: styles.secondaryDark,
//       },
//       error: {
//         main: styles.error,
//         light: styles.errorLight,
//         dark: styles.errorDark,
//       },
//       warning: {
//         main: styles.warning,
//         light: styles.warningLight,
//         dark: styles.warningDark,
//       },
//       info: {
//         main: styles.info,
//         light: styles.infoLight,
//         dark: styles.infoDark,
//       },
//       success: {
//         main: styles.success,
//         light: styles.successLight,
//         dark: styles.successDark,
//       },
//       background: {
//         default: styles.bodyBgColor,
//       },
//     },
//     shape: {
//       borderRadius: styles.borderRadius,
//     },
//   }
// ];

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
