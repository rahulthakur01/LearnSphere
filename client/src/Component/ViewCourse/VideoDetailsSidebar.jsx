import React, { useEffect, useState } from "react";
import IconBtn from "../Common/IconBtn";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoDetailsSidebar = () => {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const { sectionId, subSectionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
    totalNoOfLectures,
  } = useSelector((state) => state.viewCourse);

  useEffect(() => {
    const setActiveFlags = () => {
      if (!courseSectionData.length) return;
      const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );
      const currentSubSectionIndex = courseSectionData?.[
        currentSectionIndex
      ]?.subSection.findIndex((data) => data._id === subSectionId);
      const activeSubSectionId =
        courseSectionData[currentSectionIndex]?.subSection?.[
          currentSubSectionIndex
        ]?._id;
      setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
      setVideoBarActive(activeSubSectionId);
    };
    setActiveFlags();
  }, [courseSectionData, courseEntireData, location.pathname]);

  return (
    <>
      <div>
        {/* for buttons */}
        <div className="flex flex-col ">
          <div className="flex justify-between p-4">
            <div>back</div>
            <div>
              <IconBtn text="Add Review" />
            </div>
          </div>
          {/* for heading */}
          <div className="px-4 py-2">
            <p className="font-semibold text-richblack-200 text-xl">
              {courseEntireData?.courseName}
            </p>
            <p className="text-sm text-richblack-400">
              {completedLectures?.length} /{totalNoOfLectures}
            </p>
          </div>
        </div>
        {/*  section  and subsection*/}
        <div>
          {courseSectionData.map((course, index) => (
            <div key={index} onClick={()=>setActiveStatus(course?._id)}>
              {/* section */}
              <div className="border p-2">
                <h2>{course?.sectionName}</h2>
              </div>

              {/* subsection */}
              <div>
                {activeStatus === course?._id && (
                  <div>
                    {course?.subSection.map((topic, index) => (
                      <div
                        className={`flex gap-5 p-2 ${
                          videoBarActive === topic?._id
                            ? "bg-yellow-50 text-richblack-900"
                            : "bg-richblack-900 text-white"
                        }`}
                        key={index}
                      >
                        <input type="checkbox" checked={completedLectures?.includes(topic?._id)} onChange={()=>{}}/>
                        <span className="text-sm ">{topic.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoDetailsSidebar;
