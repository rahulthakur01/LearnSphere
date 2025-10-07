import React, { useState } from "react";
import HighLightText from "./HighLightText";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "../HomePage/CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];


const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const[courses, setCourses] = useState(HomePageExplore[0].courses);
    const[currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

   function setMyCard(value){
    setCurrentTab(value);
    const result = HomePageExplore.filter((course)=> course.tag === value);
    setCourses(result[0].courses)
    setCurrentCard(result[0].courses[0].heading)
   }

    console.log(currentCard)
  return (
    <>
      <div className=" ">
        <div className="text-4xl font-semibold text-center">
          Unlock the
          <HighLightText text={"Power fo code"} />
        </div>
        <p className="text-center text-richblack-300 text-sm text-[16px] mt-3">
          Learn to build anything you can imagine
        </p>
        <div className="bg-richblack-800 rounded-full flex mt-5 mb-5 border-richblack-100 px-1 py-1">
          {tabsName.map((ele, i) => {
            return (
              <div
                className={`${
                  currentTab === ele
                    ? "bg-richblack-900 text-richblack-50 font-medium"
                    : "text-richblack-200"
                } px-7 py-2 hover:bg-richblack-900 text-richblack-200 cursor-pointer rounded-full transition-all duration-300`}
                onClick={()=>setMyCard(ele)}
              >
                {ele}
              </div>
            );
          })}
        </div>
        <div className='hidden lg:block lg:h-[150px]'></div>
          
          {/* course card */}
          <div className=" flex lg:justify-between lg:gap-0 gap-10 flex-wrap px-3 mt-6
              absolute lg:translate-x-[-50%] lg:left-[50%] w-full lg:max-w-[1200px] lg:translate-y-[-50%]
            lg:mb-0 mb-7">
            {
              courses.map((ele, index)=>{
                return(
                  <CourseCard
                    key={index}
                    cardData = {ele}
                    currentCard={currentCard}
                    setCurrentCard={setCurrentCard}
                   />
                )
              })
            }
          </div>

      </div>
    </>
  );
};
export default ExploreMore;
