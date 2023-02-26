import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { defaultTheme } from "./themes/default";
import Main from "./pages/Main";
import Wrap from "./components/Wrap";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Wrap>
        <Main />
      </Wrap>
    </ThemeProvider>
  );
}

export default App;
