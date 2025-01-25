import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import AppRouterProvider from "./providers/app-router-provider";

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppRouterProvider />
    </StrictMode>
  );
}
