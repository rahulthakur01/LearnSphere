import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../../data/countrycode.json";
import { apiConnector } from "../../../Services/apiConnector";
import { contactUsEndpoints } from "../../../Services/api";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("DATA.....", data);
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactUsEndpoints.CONTACT_US_API,
        data
      );
      console.log("RESPONSE", response);

      setLoading(false);
    } catch (error) {
      console.log("Error message", error.message);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        countrycode: "",
        phoneNumber: "",
        message: "",
      });
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-7">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="firstName" className="text-richblack-5 text-[14px]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
            />
            {errors.firstName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Enter your first name
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 ">
            <label htmlFor="lastName" className="text-richblack-5 text-[14px]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
            />{" "}
            {errors.lastName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Enter your last name
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="email" className="text-richblack-5 text-[14px]">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
          />{" "}
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              {" "}
              Enter your email
            </span>
          )}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="text-richblack-5 text-[14px]">
            Phone Number
          </label>
          <div className="flex text-richblack-5 gap-4 items-center mt-2">
            <div className="flex w-[120px] flex-col gap-4">
              <select
                type="text"
                name="fname"
                id="fname"
                {...register("countrycode", { required: true })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              >
                {countryCode.map((code, index) => {
                  return (
                    <option key={index}>
                      {code.code} - {code.country}
                    </option>
                  );
                })}
              </select>
              {errors.fname && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  choose
                </span>
              )}
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="97852-65281"
                {...register("phoneNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Phone Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Phone Number" },
                  minLength: { value: 10, message: "Invalid Phone Number" },
                })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              {errors.phoneNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Enter your phone number
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-richblack-5 text-[14px]">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Enter your message here"
            cols={30}
            rows={7}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              enter some text
            </span>
          )}
        </div>

        <div className="">
          <button
            type="submit"
            disabled={loading}
            className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black w-full ${
              !loading && "transition-all duration-300 hover:scale-95"
            } disabled:bg-richblack-500 `}
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
