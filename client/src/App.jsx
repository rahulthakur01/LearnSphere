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
import PrivateRoute from "./Component/Core/HomePage/Auth/PrivateRoute";
import Settings from "./Component/Core/Dashboard/Settings";
import EnrolledCourses from "./Component/Core/Dashboard/EnrolledCourses";
import Cart from "./Component/Core/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constant";
import { useSelector } from "react-redux";
import AddCourses from "./Component/Core/Dashboard/Add course";
function App() {
  const { user } = useSelector((state) => state.profile);
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
          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/settings" element={<Settings />} />

            {user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route
                  path="dashboard/enrolled-courses"
                  element={<EnrolledCourses />}
                />
                <Route path="dashboard/cart" element={<Cart />} />
              </>
            )}


            {
              user?.accountType === ACCOUNT_TYPE.INSTRUCTOR &&(
               <>
                <Route path="dashboard/add-course" element={<AddCourses/>}/>
               </>
              )
            }
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
