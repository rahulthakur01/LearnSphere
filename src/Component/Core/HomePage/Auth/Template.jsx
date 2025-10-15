import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useSelector } from "react-redux";
import frameImg from "../../../../assets/Images/frame.png"
const Template = ({ title, description1, description2, formType, signupImg}) => {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <main>
        {loading ? (
          <div className="spinner">loading...</div>
        ) : (
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
            {/* left */}
            <div>
              <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                {title}
              </h1>
              <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                <span className="text-richblack-100">{description1}</span>{" "}
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {description2}
                </span>
              </p>
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
            {/* right */}
            <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
              <img
                src={frameImg}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
              />
              <img
                src={signupImg}
                alt="Students"
                width={558}
                height={504}
                loading="lazy"
                className="absolute -top-4 right-4 z-10"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Template;
