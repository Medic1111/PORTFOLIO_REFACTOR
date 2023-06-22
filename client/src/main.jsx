import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UiProvider from "./features/ui-ctx.jsx";
import TechProvider from "./features/tech-ctx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UiProvider>
      <TechProvider>
        <App />
      </TechProvider>
    </UiProvider>
  </React.StrictMode>
);
