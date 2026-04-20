import React, { useState, useEffect } from "react";
import VideoDetailsSidebar from "../Component/ViewCourse/VideoDetailsSidebar";
import CourseReviewModal from "../Component/ViewCourse/CourseReviewModal";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getFullCourseDetails } from "../Services/oprations/courseAPI";
import {
  setCourseSectionData,
  setCourseEntireData,
  setTotalNoOfLectures,
  setCompletedLectures,
  updateCompletedLectures,
} from "../Redux/slices/viewCourseSlice";

const ViewCourse = () => {
  const [reviewModal, setReviewModal] = useState(false);
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const setCourseSpecificDetails = async () => {
      const courseData = await getFullCourseDetails(courseId, token);
      dispatch(setCourseSectionData(courseData?.courseDetails?.courseContent));
      dispatch(setCourseEntireData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));
      let lectures = 0;
      courseData?.courseDetails?.courseContent.forEach(
        (sec) => (lectures += sec.subSection.length)
      );
      dispatch(setTotalNoOfLectures(lectures));
      console.log("Viewcourse courseData............", courseData);
    };
    setCourseSpecificDetails();
  }, []);

  return (
    <>
      <main className="text-white flex pt-18 min-h-[calc(100vh-1.5rem)] overflow-hidden ">
        {/* Video sidebar */}
        <div className="sticky top-[80px] w-[20%] border">
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        </div>
        {/* content */}
        <div className="border border-red-600 w-[80%]">
          <div className="text-richblack-50 py-10 mx-auto ">
            <Outlet />
          </div>
        </div>
      </main>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
};

export default ViewCourse;
