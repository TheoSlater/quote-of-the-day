import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#292929",
      dark: "#242424",
    },
    secondary: {
      main: "#f50057",
    },
    divider: "rgba(74,74,74,0.12)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "rgb(48, 48, 48)",
          "&:hover": {
            backgroundColor: "rgb(44, 44, 44)",
          },
        },
      },
    },
  },
});
