import React, { useEffect } from "react";
import VideoDetailsSidebar from "../Component/ViewCourse/VideoDetailsSidebar";
import CourseReviewModal from "../Component/ViewCourse/CourseReviewModal";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getFullCourseDetails } from "../Services/oprations/courseAPI";

const ViewCourse = () => {
  const [reviewModal, setReviewModal] = useState(false);
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const setCourseSpecificDetails = async () => {
      const courseData = await getFullCourseDetails(courseId, token);
      console.log("Viewcourse courseData............", courseData)
    };
    setCourseSpecificDetails();
  }, []);

  return (
    <>
      <div className="text-white">
        <VideoDetailsSidebar />
        <div>
          <Outlet />
        </div>
      </div>
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
};

export default ViewCourse;
