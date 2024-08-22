"use client";
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { Suspense } from "react";
import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>{children}</Suspense>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
