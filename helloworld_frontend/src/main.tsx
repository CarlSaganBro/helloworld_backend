import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import { BrowserRouter } from "react-router-dom";
import { MyApp } from "./app/app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </StrictMode>,
);
