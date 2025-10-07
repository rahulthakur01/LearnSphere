import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import { FaUserGroup } from "react-icons/fa6";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <>
      <div
        className={`lg:w-[30%] w-[360px] ${
          currentCard === cardData?.heading
            ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
            : "bg-richblack-800"
        } h-[300px] box-border cursor-pointer`}
        onClick={()=>setCurrentCard(cardData?.heading)}
      >
        <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
          <div className={`${currentCard === cardData?.heading && "text-richblack-800"} font-semibold text-[20px]`}>{cardData?.heading}</div>
          <div className="text-richblack-400">{cardData?.description}</div>
        </div>

        <div className={`flex justify-between items-center px-6 py-3 ${currentCard === cardData?.heading ? "text-blue-300": "text-richblack-300"}`}>
          <div className="flex gap-2 items-center text-[16px]">
            <FaUserGroup/>
            <p>Begineer</p>
          </div>
          <div className="flex gap-2 items-center text-[16px]">
            <ImTree/>
            <p>lesson</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
