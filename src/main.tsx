import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";
import { theme } from "./theme.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
