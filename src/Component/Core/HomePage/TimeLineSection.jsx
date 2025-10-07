import React from "react";

import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimeLineImage.png";
const timlinelogo = [
  {
    Logo: logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    Logo: logo2,
    heading: "Responsibilty",
    description: "Students will always be our top priority",
  },
  {
    Logo: logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    Logo: logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <>
      <section className="flex flex-row gap-15 items-center  ">
        <div className="w-[45%] flex flex-col gap-5">
          {timlinelogo.map((element, index) => {
            return (
              <div className="flex gap-6 items-center" key={index}>
                <div className="w-[50px] h-[50px]">
                  <img src={element.Logo} alt="logo" />
                </div>
                <div>
                  <h1 className="font-semibold text-[18px]">
                    {element.heading}
                  </h1>
                  <p className="text-base">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative shadow-blue-200 ">
          <img
            src={timelineImage}
            alt="Timelineimage"
            className="object-cover w-full h-full"
          />

          <div className=" bg-caribbeangreen-700 text-white uppercase py-7 flex absolute
         left-[50%]  translate-x-[-50%] translate-y-[-50%]
          ">
            <div className="flex gap-5 items-center px-7 border-r border-r-caribbeangreen-400">
              <p className="text-3xl font-bold ">10</p>
              <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
            </div>

            <div className="flex gap-5 items-center px-7">
              <p className="text-3xl font-bold">250</p>
              <p className="text-caribbeangreen-300 text-sm">TYpe of Courses</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TimeLineSection;
