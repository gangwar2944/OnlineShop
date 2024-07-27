import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "light",
    divider: "rgba(0, 0, 0, 0.08)", // Adjust contrast for light background
    primary: {
      main: "#000", // dark black for primary
      light: "#000",
    },
    secondary: {
      main: "#ccd9e5", // Lighter version of secondary
      light: "#fff", // data table header
    },
    error: {
      main: "#dc3545", // Adjust for better contrast on light background
    },
    success: {
      main: "#39ac73", // Use Material Design's green
      light: "#BEE2C4", // workorder wiget header
      dark: "#009999",
    },
    warning: {
      main: "#ffc61a", // Use Material Design's yellow
    },
    info: {
      main: "#3973ac", // Use Material Design's blue
      light: "#0e7cf4", // use in link color
    },
    tile: {
      first: "#D8E6EC",
      second: "#a0cca8",
      third: "#d7d3ed",
      overView: "#93bcd2",
    },
    header: {
      main: "#ffffff",
    },
    background: {
      default: "#ffffff",
      // paper:"#ffffff",
      paper: "#f5f5f7",
    },
    border: {
      main: "#dee2e6", // using this color to give border of dataTable and other places.
      light: "#F7F9FB",
    },
    grey: {
      100: "#dee2e6", // using this color to give border of dataTable and other places.
      400: "rgba(255, 255, 255, 0.8)",
      600: "#000", //tiles usage color
    },
    common: {
      black: "#000", // Black for text in light theme
      white: "#fff",
    },
    text: {
      primary: "#000", // Dark text for better contrast
      secondary: "#666666", // Less dark text for secondary    // :-using it on overview titles wiget label
      disabled: "rgba(0, 0, 0, 0.5)",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "#e0e8ef",
      // active:"#74b9ff",
      focus: "#1e88e5",
    },
  },
});

export const darkTheme= createTheme({
  typography: {
    fontFamily: `"Roboto",sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "dark",
    divider: "rgba(218, 224, 231, 0.08)",
    primary: {
      main: "#1e88e5",
    },
    secondary: {
      main: "#3b4d5e",
      light: "#1d2832", // header of the datatable
    },
    error: {
      main: "#dc3545", // Adjust for better contrast on light background
      light: "#ee6666",
    },
    success: {
      main: "#39ac73", // Use Material Design's green
      light: "#05817e",
      dark: "#009999",
    },
    warning: {
      main: "#ffc61a", // Use Material Design's yellow
    },
    info: {
      main: "#3973ac", // Use Material Design's blue
      light: "#0e7cf4",
      dark: "#230cf0",
    },
    header: {
      main: "#1d2832",
    },
    background: {
      default: "#1d2832",
      paper: "#24323e",
    },
    border: {
      main: "#334657", // using this color to give border of dataTable and other places.
      light: "#2f4151",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    tile: {
      first: "#008698",
      second: "#083c5a",
      third: "#3e6b89",
      overView: "#396c87",
    },
    grey: {
      100: "#334657",
      400: "rgba(13, 18, 32, 0.8)",
      600: "#9E9FA5",
    },
    text: {
      primary: "#ced9e2",
      secondary: "#9e9fa5", //TODO need to be investigate why this color is automatically applying on dropdown Label
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "#24323e",
      // active:"#74b9ff",  //TODO need to be investigate why this color is automatically applying on dropdown svg
      focus: "#74b9ff",
    },
  },
});
