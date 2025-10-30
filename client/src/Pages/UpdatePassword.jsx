import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import {resetPassword} from '../Services/oprations/authAPI'
import { useNavigate } from "react-router-dom";
const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { password, confirmPassword } = formData;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  };

  return (
    <>
      <div className="bg-richblack-800 absolute left-[50%] top-[20%] translate-x-[-50%]">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col lg:p-8 max-w-[500px] p-4">
            <h1 className="font-semibold text-richblack-5 text-xl">
              Choose new password
            </h1>
            <p className="text-[1rem] leading-[1.625rem] my-4 text-richblack-100">
              Almost done. Enter your new password and youre all set.
            </p>
            <form onSubmit={handleOnSubmit}>
              <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Create Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  required
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
                <span
                  className="absolute top-[70%] right-4 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <FaEyeSlash fontSize={20} fill="#AFB2BF" />
                  ) : (
                    <FaEye fontSize={20} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <label className="relative">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 my-3">
                  Confirm Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm password"
                  required
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
                <span
                  className="absolute top-[80%] right-4 cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash fontSize={20} fill="#AFB2BF" />
                  ) : (
                    <FaEye fontSize={20} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <button
                type="submit"
                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 cursor-pointer"
              >
                Reset Password
              </button>
            </form>

            <div className="flex gap-4 items-center justify-between mt-6">
              <Link
                to="/login"
                className="flex items-center gap-x-2 text-richblack-5"
              >
                <FaArrowLeft />
                <p className=" ">Back to Login</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UpdatePassword;
