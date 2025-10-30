import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { getPasswordResetToken } from "../Services/oprations/authAPI";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <>
      <div className="bg-richblack-800 absolute left-[50%] top-[20%] translate-x-[-50%]">
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className="flex flex-col lg:p-8 max-w-[500px] p-4">
            <h1 className="font-semibold text-richblack-5 text-xl">
              {!emailSent ? "Reset your password" : "check mail"}
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
              {!emailSent
                ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                : `We have sent the reset email to ${email}`}
            </p>
            <form onSubmit={handleOnSubmit}>
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email <sup className="text-pink-200">*</sup>
                </p>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  required
                  onChange={handleOnChange}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                  style={{
                    boxShadow: " inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                />
              </label>
              <button
                type="submit"
                className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 cursor-pointer"
              >
                {!emailSent ? "Reset Password" : "Resend Email"}
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
export default ForgotPassword;
