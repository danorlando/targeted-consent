import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Discover } from "./Discover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
