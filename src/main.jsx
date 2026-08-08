import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  },
  palette: {
    primary: {
      main: "hsl(213, 96%, 18%)",
      light: "hsl(206, 94%, 87%)",
    },
    text: {
      primary: "hsl(213, 96%, 18%)",
      secondary: "hsl(231, 11%, 63%)",
    },
    background: {
      default: "hsl(218, 100%, 97%)",
      paper: "hsl(231, 100%, 99%)",
    },
    action: {
      hover: "hsl(243, 100%, 62%)",
    },
    divider: "hsl(229, 24%, 87%)",
    error: { main: "hsl(354, 84%, 57%)" },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
