import React, { useState } from "react";
import { useForm } from "react-hook-form";
import countryCode from "../../../data/countrycode.json";
import {apiConnector} from "../../../Services/apiConnector";
const ContactUsForm = () => {
  const[loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = (data) => {
    try {
      setLoading(true)
    } catch (error) {}
  };

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
              className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-5 p-3 focus:outline-none"
            />
            {errors.firstName && <span>Enter your first name</span>}
          </div>

          <div className="flex flex-col gap-2 ">
            <lable htmlFor="lastName" className="text-richblack-5 text-[14px]">
              Last Name
            </lable>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-5 p-3 focus:outline-none"
            />{" "}
            {errors.lastName && <span>Enter your last name</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <lablel htmlFor="email" className="text-richblack-5 text-[14px]">
            Email
          </lablel>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-5 p-3 focus:outline-none"
          />{" "}
          {errors.error && <span> Enter your email</span>}
        </div>

        <div>
          <label htmlFor="phoneNumber" className="text-richblack-5 text-[14px]">
            Phone Number
          </label>
          <div className="flex text-richblack-5 gap-4 items-center">
            <div className="flex w-[100px] flex-col gap-4">
              <select
                type="text"
                name="fname"
                id="fname"
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-5 p-3 focus:outline-none"
              >
                {countryCode.map((code, index) => {
                  return (
                    <option key={index}>
                      {code.code} - {code.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="enter your phone"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter your Phone Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Phone Number" },
                  minLength: { value: 10, message: "Invalid Phone Number" },
                })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-5 p-3 focus:outline-none"
              />
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
            cols={30}
            rows={7}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-5 p-3 focus:outline-none"
            {...register("message", { required: true })}
          />
          {errors.message && <span>enter some text</span>}
        </div>

        <div>
          <button type="submit">Send message</button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
