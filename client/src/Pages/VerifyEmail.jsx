import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { sendOtp, signUp } from "../Services/oprations/authAPI";
const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUpData, loading } = useSelector((state) => state.auth);

  const OTP_LEN = 6;
  const [otp, setOtp] = useState(new Array(OTP_LEN).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (!signUpData) {
      navigate("/signup");
    }
  }, [signUpData, navigate]);

  //handleOnChange
  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < OTP_LEN - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };
  //handleOnKeyDown
  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };
  //handleOnSubmit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== OTP_LEN) {
      toast.error(`Please enter ${OTP_LEN} - digit OTP`);
      return;
    }

    if (!signUpData) {
      toast.error("Signup data missing , please signup again");
      navigate("/signup");
      return;
    }
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      navigate,
    } = signUpData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        enteredOtp,
        navigate
      )
    );
  };
  const handleResendOtp = () => {
    if (signUpData?.email) {
      dispatch(sendOtp(signUpData?.email));
      toast.success("OTP Resent Successfully!");
    } else {
      toast.error("Email not found, please signup again");
      navigate("/signup");
    }
  };

  return (
    <>
      <div className="bg-richblack-800 absolute left-[50%] top-[20%] translate-x-[-50%]">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col lg:p-8 max-w-[500px] p-4">
            <h1 className="font-semibold text-richblack-5 text-xl">
              Verify Email
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
              A verification code has been sent to you. Enter the code below
            </p>
            <form onSubmit={handleOnSubmit}>
              {otp.map((input, index) => {
                return (
                  <input
                    key={index}
                    value={otp[index]}
                    onChange={(e) => handleOnChange(e.target.value, index)}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    ref={(input) => (inputRef.current[index] = input)}
                    className="w-10 h-10 text-center text-lg rounded-md border border-richblack-600 bg-richblack-700 text-richblack-5 focus:outline-none focus:border-yellow-50"
                  />
                );
              })}
              <button
                type="submit"
                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
              >
                Verify Email
              </button>
            </form>

            <div className="flex gap-4 items-center justify-between mt-6">
              <Link
                to="/signup"
                className="flex items-center gap-x-2 text-richblack-5"
              >
                <FaArrowLeft />
                <p className=" ">Back to Signup</p>
              </Link>
              <button
                onClick={handleResendOtp}
                className="text-blue-200 cursor-pointer"
              >
                Resend it
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyEmail;
