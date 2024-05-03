import React from "react";
import Homepage from "./components/Homepage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
