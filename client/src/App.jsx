import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Common/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OpenRoute from "./Component/Core/HomePage/Auth/OpenRoute";
import VerifyEmail from "./Pages/VerifyEmail";
import ForgetPassword from "./Pages/ForgetPassword";
function App() {
  return (
    <>
      <div className=" w-screen min-h-screen bg-richblack-900 font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
          <Route
            path="login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />

          <Route
            path="/verify-email"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />

          <Route
            path="/forgetPassword"
            element={
              <OpenRoute>
                <ForgetPassword />
              </OpenRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
