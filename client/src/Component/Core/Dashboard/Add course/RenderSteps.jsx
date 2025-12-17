import React from "react";
import { useSelector } from "react-redux";
import { FaRegCircleCheck } from "react-icons/fa6";
import CourseInfoForm from "./CourseInformation/CourseInfoForm";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm";
import PublishCourse from "./PublishCourse/PublishCourse";
const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);

  const steps = [
    { id: 1, title: "Course Information" },
    { id: 2, title: "Course Builder" },
    { id: 3, title: "Publish" },
  ];

  return (
    <div className="w-full flex flex-col  gap-4 ">

      {/* ----- STEP CIRCLES + DASH LINES ----- */}
      <div className="flex items-center justify-center gap-4">

        {steps.map((item, index) => (
          <div key={item.id} className="flex items-center">
            
            {/* Step Circle */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full  
              ${
                step === item.id
                  ? "bg-yellow-500/20 border-yellow-500 text-yellow-500"
                  : step > item.id
                  ? "bg-yellow-500 border-yellow-500 text-black"
                  : "bg-richblack-800 border-richblack-700 text-richblack-300"
              }`}
            >
              {step > item.id ? <FaRegCircleCheck /> : item.id}
            </div>

            {/* Dashes Between Circles (except last circle) */}
            {index !== steps.length - 1 && (
              <div className="w-60 border-t border-dashed border-richblack-600 "></div>
            )}
            
          </div>
        ))}

      </div>

      {/* ----- TITLES UNDER STEPS ----- */}
      <div className="flex justify-between  px-8 mx-10">
        {steps.map((item) => (
          <p
            key={item.id}
            className={`text-sm  ${
              step === item.id
                ? "text-yellow-500"
                : "text-richblack-300"
            }`}
          >
            {item.title}
          </p>
        ))}
      </div>

      {/* ----- FORMS ----- */}
      {step === 1 && <CourseInfoForm />}
     { step === 2 && <CourseBuilderForm/>}
     { step === 3 && <PublishCourse/>}
    </div>
  );
};

export default RenderSteps;
