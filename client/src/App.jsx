import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Common/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OpenRoute from "./Component/Core/HomePage/Auth/OpenRoute";
import VerifyEmail from "./Pages/VerifyEmail";
import ForgetPassword from "./Pages/ForgotPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import ContactPage from "./Pages/ContactPage";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import MyProfile from "./Component/Core/Dashboard/MyProfile";

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
          <Route
            path="/update-password/:id"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          />
          <Route
            path="about"
            element={
              <OpenRoute>
                <About />
              </OpenRoute>
            }
          />
          <Route path="contact" element={<ContactPage />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/my-profile" element={<MyProfile/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
