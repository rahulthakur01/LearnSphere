import React from "react";
import RenderSteps from "./RenderSteps";
const AddCourses = () => {
  return (
    <>
      <main className="flex flex-row justify-between gap-8 ">
        <div className="flex flex-col gap-4 mt-4  w-[80%]">
          <h1 className="font-semibold leading-[26px] text-2xl">Add Course</h1>
          <RenderSteps/>
        </div>
        <div className="flex flex-col border border-richblack-700 bg-richblack-800 p-6   rounded-[8px] mt-4">
          <p className="font-semibold leading-[26px] text-2xl my-4">Code Upload Tips</p>
          <ul className="flex flex-col gap-4 list-disc text-sm">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default AddCourses;
