import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashPage } from "./ui/components/splash";
import { NotFound } from "./ui/pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SplashPage />} />
          <Route path="sign-in" element={<SplashPage />} />
          <Route path="sign-up" element={<SplashPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
