import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Discover } from "./Discover";
import { PreliminaryCheck } from "./PreliminaryCheck";

function App() {
  return (
    <BrowserRouter>
      <PreliminaryCheck>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </PreliminaryCheck>
    </BrowserRouter>
  );
}

export default App;
