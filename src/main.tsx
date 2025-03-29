import React from "react";
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing} from "./pages/Landing";
import {Donate} from "./pages/Donate";
import {ThankYou} from "./pages/Thankyou";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/donate" element={<Donate />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
