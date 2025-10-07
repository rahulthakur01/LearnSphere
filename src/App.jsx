import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className=" w-screen min-h-screen bg-richblack-900 font-inter">
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
