import React from "react";
import { Routes, Route } from "react-router-dom";
import Contactpage from "../pages/Contactpage";
import Featurespage from "../pages/Featurespage";
import Homepage from "../pages/Homepage";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/features" element={<Featurespage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </div>
  );
}

export default Main;
