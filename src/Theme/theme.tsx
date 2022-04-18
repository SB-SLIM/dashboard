import { createTheme } from "@mui/material/styles";
import styles from "../scss/abstracts/_variables.module.scss";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: styles.primary,
      light: styles.primaryLight,
      dark: styles.primaryDark,
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: styles.secondary,
      light: styles.secondaryLight,
      dark: styles.secondaryDark,
    },

    background: {
      default: styles.bodyBgColor,
    },
  },
  shape: {
    borderRadius: styles.borderRadius,
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default theme;
