import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import the LandingPage component

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Default route */}
        {/* <Route path="/dashboard" element={<Dashboard />} />{" "} */}
      </Routes>
    </Router>
  </StrictMode>
);
