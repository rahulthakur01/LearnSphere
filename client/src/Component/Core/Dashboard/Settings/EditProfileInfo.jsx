import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "../../../../Services/oprations/settingAPI";
import IconBtn from "../../../Common/IconBtn";
const EditProfileInfo = () => {
  const gender = ["Male", "Female", "Other"];
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (data) => {
    console.log(data);
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("EDIT PROFILE ERROR MESSAGE", error);
    }
  };

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset({
        firstName:"",
        lastName:"",
        dateOfBirth:"",
        gender:"",
        phoneNumber:"",
        about:""
      })

    }
  },[isSubmitSuccessful])

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex flex-col gap-4  rounded-md bg-richblack-800 lg:p-6">
          <h1 className="text-2xl leading-[38px] font-semibold">
            Profile Information
          </h1>
          <div className="flex items-center gap-4  ">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="firstName"
                className="text-richblack-5 text-[14px]"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                {...register("firstName", { required: true })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Enter your first name
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="lastName"
                className="text-richblack-5 text-[14px]"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Enter your last name
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4  ">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="dateOfBirth"
                className="text-richblack-5 text-[14px]"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Enter Date of birth",
                  },

                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of birth at present",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Enter your dob
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="gender" className="text-richblack-5 text-[14px]">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender "
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              >
                {gender.map((ele, i) => (
                  <option key={i} value={ele}>{ele}</option>
                ))}
              </select>

              {errors.gender && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Enter gender
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4  ">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="phoneNumber"
                className="text-richblack-5 text-[14px]"
              >
                Contact number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter contact number"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Please contact number",
                  },
                  maxLength: { value: 12, message: "Invalid contact number" },
                  minLength: { value: 10, message: "Invalid contact number" },
                })}
                defaultValue={user?.additionalDetails?.phoneNumber}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              {errors.phoneNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Enter your phone number
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="about" className="text-richblack-5 text-[14px]">
                About
              </label>
              <input
                type="text"
                id="about"
                name="about"
                placeholder="Enter about details"
                {...register("about", {
                  required: true,
                })}
                defaultValue={user?.additionalDetails?.about}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  About yourself
                </span>
              )}
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

export default EditProfileInfo;
