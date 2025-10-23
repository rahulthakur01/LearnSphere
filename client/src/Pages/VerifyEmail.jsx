import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";

import { Link } from "react-router-dom";
const VerifyEmail = () => {
  const { loading } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
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
            <form>
             
            </form>
            <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>

            <div className="flex gap-4 items-center justify-between mt-6">
              <Link
                to="/signup"
                className="flex items-center gap-x-2 text-richblack-5"
              >
                <FaArrowLeft />
                <p className=" ">Back to Signup</p>
              </Link>
              <button className="text-blue-200 cursor-pointer">
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
