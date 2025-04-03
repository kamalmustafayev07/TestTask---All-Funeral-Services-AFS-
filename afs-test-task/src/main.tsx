import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./layout.tsx";
import Home from "./page.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>
          <Home />
        </RootLayout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
