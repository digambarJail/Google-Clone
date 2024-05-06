import React from "react";
import Homepage from "./components/Homepage"
import Result from "./components/Result"
import Results from './components/Results'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="result/:commentId" element={ <Result />} />
        <Route path="results/:searchText" element={ <Results />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
