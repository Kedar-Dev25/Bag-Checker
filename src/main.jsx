import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import BaggageGuide from "./Baggage-Guide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/* Static route */}
        <Route
          path="/baggage-guide"
          element={<BaggageGuide />}
        />

        {/* Dynamic airline routes */}
        <Route
          path="/:airline"
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);