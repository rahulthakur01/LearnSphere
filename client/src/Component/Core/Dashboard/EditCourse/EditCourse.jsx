import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import RenderSteps from "../Add course/RenderSteps";
import { getFullCourseDetails } from "../../../../Services/oprations/courseAPI";
import { setCourse, setEditCourse } from "../../../../Redux/slices/courseSlice";

const EditCourse = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getFullCourseDetails(courseId, token);
      if (result?.courseDetails) {
        dispatch(setEditCourse(true));
        dispatch(setCourse(result?.courseDetails));
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div >
        <h1 className="text-2xl font-medium text-richblack-5">Edit Course</h1>
        <div>
          {course ? (
            <div className="mx-auto max-w-[850px]">
              <RenderSteps />
            </div>
          ) : (
            <div>
              <h1 className="mt-14 text-center text-3xl font-semibold text-richblack-100">Course Not Found !</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default EditCourse;
