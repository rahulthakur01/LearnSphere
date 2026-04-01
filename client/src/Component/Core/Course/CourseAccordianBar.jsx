import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import CourseSubSectionAccordian from "./CourseSubSectionAccordian";

const CourseAccordianBar = ({ course, isActive, handleActive }) => {
  const contentElement = useRef(null);

  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(isActive.includes(course._id));
  }, [isActive]);

  const [sectionHeight, setSectionHeight] = useState(0);
  useEffect(() => {
    setSectionHeight(active ? contentElement.current.scrollHeight : 0);
  }, [active]);

  return (
    <>
      <div className="border border-richblack-700 bg-richblack-700 text-white">
        <div>
          <div
            className="flex justify-between bg-opacity-20 px-7  py-6 cursor-pointer transition-[0.3s]"
            onClick={() => handleActive(course._id)}
          >
            <div className="flex items-center gap-2">
              <i
                className={
                  isActive.includes(course._id)
                    ? "rotate-180 transition-[0.3s]"
                    : "rotate-0 transition-[0.3s]"
                }
              >
                <FaChevronDown />
              </i>
              <p>{course?.sectionName}</p>
            </div>
            <div>
              <p className="text-yellow-25 text-sm">
                {" "}
                {course.subSection.length} {`lecture (s)`}
              </p>
            </div>
          </div>
        </div>
        <div
          ref={contentElement}
          style={{ height: sectionHeight }}
          className={`overflow-hidden bg-richblack-800 h-0  transition-[height] duration-[0.35s] ease-[ease]`}
        >
          <div>
            {course?.subSection?.map((subSec, i) => (
              <CourseSubSectionAccordian subSec={subSec} key={i} />
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CourseAccordianBar;
