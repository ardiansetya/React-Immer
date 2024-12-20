import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./counterApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
