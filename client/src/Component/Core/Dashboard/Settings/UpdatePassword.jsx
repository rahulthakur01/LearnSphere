import React, { useState } from "react";
import IconBtn from "../../../Common/IconBtn";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../../Services/oprations/settingAPI";
const UpdatePassword = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSuccessful },
  } = useForm();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const handleFormSubmit = (data) => {
    console.log(data);
    try {
      dispatch(changePassword(token, data));
    } catch (error) {
      console.log("errorro....", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col gap-4  rounded-md bg-richblack-800 lg:p-6">
          <h1 className="text-2xl leading-[38px] font-semibold">Password</h1>

          <div className="flex items-center gap-4 ">
            <div className="flex flex-col gap-2 mt-2 relative w-full ">
              <label htmlFor="oldPassword">Current Password</label>
              <input
                type={showOldPassword ? "password" : "text"}
                name="oldPassword"
                id="oldPassword"
                placeholder="your current password"
                {...register("oldPassword", { required: true })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              <span
                className="absolute top-[50%] right-4 cursor-pointer"
                onClick={() => setShowOldPassword((prev) => !prev)}
              >
                {showOldPassword ? (
                  <FaEyeSlash fontSize={20} fill="#AFB2BF" />
                ) : (
                  <FaEye fontSize={20} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2 relative w-full">
              <label htmlFor="newPassword">New Password</label>
              <input
                type={showNewPassword ? "password" : "text"}
                name="newPassword"
                id="newPassword"
                placeholder="your new password"
                {...register("newPassword", { required: true })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              <span
                className="absolute top-[50%] right-4 cursor-pointer"
                onClick={() => setShowNewPassword((prev) => !prev)}
              >
                {showNewPassword ? (
                  <FaEyeSlash fontSize={20} fill="#AFB2BF" />
                ) : (
                  <FaEye fontSize={20} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-end mt-4">
            <button
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              Cancel
            </button>
            <IconBtn text="Save" type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdatePassword;
