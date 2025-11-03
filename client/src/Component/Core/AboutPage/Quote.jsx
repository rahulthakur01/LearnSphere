import React from "react";
import HighLightText from "../HomePage/HighLightText";
const Quote = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-10/11 max-w-[1260px] mx-auto text-richblack-5 text-4xl font-semibold leading-[42px] text-center my-14">
          We are passionate about revolutionizing the way we learn. Our
          innovative platform, 
          <HighLightText text={"combines technology"}/>
          <span className="text-orange-600">expertise</span>,
          and community to
          create an <span className="text-yellow-100">unparalleled educational experience.</span>
        </div>
      </div>
    </>
  );
};

export default Quote;
