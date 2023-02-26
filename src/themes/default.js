import { createTheme, Theme as MaterialUITheme } from "@mui/material/styles";

import "@emotion/react";

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#092863",
    },
    secondary: {
      main: "#784CF5",
      light: "#9F7CFF",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    grey: {
      100: "#E3E4EE",
      200: "#D6D8E0",
      300: "#B1B4BC",
      400: "#90959B",
      500: "#606266",
      600: "#3A3B3E",
      700: "#272829",
      800: "#1B1B1D",
      900: "#141415",
    },
  },
  typography: {
    fontFamily:
      "'Spoqa Han Sans Neo', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 700, fontSize: "1.5rem" },
    h3: { fontWeight: 700, fontSize: "1.375rem" },
    h4: { fontWeight: 700, fontSize: "1.25rem" },
    h5: { fontWeight: 700, fontSize: "1rem" },
    h6: { fontWeight: 700, fontSize: "0.875rem" },
    subtitle1: { fontWeight: 500, fontSize: "1.5rem" },
    subtitle2: { fontWeight: 500, fontSize: "1.375rem" },
    subtitle3: { fontWeight: 500, fontSize: "1.25rem" },
    subtitle4: { fontWeight: 500, fontSize: "1.125rem" },
    subtitle5: { fontWeight: 500, fontSize: "1rem" },
    subtitle6: { fontWeight: 500, fontSize: "0.875rem" },
    body1: { fontWeight: 400, fontSize: "1rem" },
    body2: { fontWeight: 400, fontSize: "0.875rem" },
    body3: { fontWeight: 400, fontSize: "0.8125rem" },
    caption: { fontWeight: 400, fontSize: "0.75rem" },
    overline: { fontWeight: 400, fontSize: "0.6875rem" },
    button: { fontWeight: 500, fontSize: "1rem" },
    light: { fontWeight: 300, fontSize: "0.875rem" },
  },
  // components: {
  // 	MuiButton: {
  // 		styleOverrides: {
  // 			root: {
  // 				'&:hover': {
  // 					background: 'auto',
  // 				},
  // 			},
  // 		},
  // 	},
  // },
});
