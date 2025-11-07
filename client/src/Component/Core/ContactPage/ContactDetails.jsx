import React from "react";
import { IoIosChatboxes } from "react-icons/io";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

const ContactDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-6 px-8 py-6 bg-richblack-800 rounded-lg ">
        <div className="flex flex-col gap-1 text-richblack-200">
          <div className="flex gap-3 items-center ">
            <IoIosChatboxes fontSize={25} />
            <h1 className="text-richblack-5 font-semibold text-xl">
              Chat on us
            </h1>
          </div>
          <p className="font-medium">Our friendly team is here to help.</p>
          <p className="font-semibold">info@learnsphere.com</p>
        </div>
        <div className="flex flex-col gap-1 text-richblack-200">
          <div className="flex gap-3 items-center ">
            <HiGlobeAsiaAustralia fontSize={25} />
            <h1 className="text-richblack-5 font-semibold text-xl">
          Visit us
            </h1>
          </div>
          <p className="font-medium">Come and say hello at our office HQ.</p>
          <p className="font-semibold"> Bank Road, Chajju Bagh, Patna, Bihar, 800001</p>
         
        </div>
        <div className="flex flex-col gap-1 text-richblack-200">
          <div className="flex gap-3 items-center ">
            <IoCall fontSize={25} />
            <h1 className="text-richblack-5 font-semibold text-xl">
             Call us
            </h1>
          </div>
          <p className="font-medium">Mon - Fri From 8am to 5pm</p>
          <p className="font-semibold">+123 456 7869</p>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
