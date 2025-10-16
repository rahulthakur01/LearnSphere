import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSignUpData } from "../../../../Redux/slices/authSlice";
import Tab from "../../../Common/Tab";
import { ACCOUNT_TYPE } from "../../../../utils/constant";
const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, passowrd, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: [e.target.value],
    }));
  };

  // form submit
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (passowrd !== confirmPassword) {
      return toast.error("Passwords Do Not Match");
    }

    const signupData = {
      ...formData,
      accountType,
    };

    dispatch(setSignUpData(signupData));
    dispatch(sendOtp(formData.email, navigate));
    setFormData = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  //  Tab data
  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <>
      <main className="">
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <div className="flex gap-x-4">
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="firstName"
                // value={firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Last Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type="text"
                name="lastName"
                // value={firstName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
          </div>
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
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <div className="flex gap-x-4">
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Create Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="password"
                // value={password}
                placeholder="Enter your password"
                required
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
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
            </label>
            <label className="relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Confirm Password <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="confirmPassword"
                // value={confirmPassword}
                placeholder="Confirm password"
                required
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <span
                className="absolute top-[50%] right-4 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash fontSize={20} fill="#AFB2BF" />
                ) : (
                  <FaEye fontSize={20} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>

          <button className="font-medium mt-6 px-6 py-2 bg-yellow-50 rounded-[8px] text-richblack-900 cursor-pointer">
            create account
          </button>
        </form>
      </main>
    </>
  );
};

export default SignupForm;
