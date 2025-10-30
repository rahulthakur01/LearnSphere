import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigationType } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <>
      <main>
        <form
          className="flex flex-col gap-y-4 w-full mt-6"
          onSubmit={handleOnSubmit}
        >
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              // value={email}
              required
              onChange={handleOnChange}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              style={{
                boxShadow: " inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="password"
              value={password}
              placeholder="Enter password"
              required
              onChange={handleOnChange}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              style={{
                boxShadow: " inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
            />
            <span
              className="absolute top-[50%] right-4 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEyeSlash fontSize={20} fill="#AFB2BF" />
              ) : (
                <FaEye fontSize={20} fill="#AFB2BF" />
              )}
            </span>
            <Link to="/forgetPassword" className="absolute right-2 bottom-[-22px]">
              <p className="text-blue-100 text-sm">Forget Password</p>
            </Link>
          </label>

          <button className="font-medium mt-6 px-6 py-2 bg-yellow-50 rounded-[8px] text-richblack-900 cursor-pointer">
            Sign In
          </button>
        </form>
      </main>
    </>
  );
};

export default LoginForm;
