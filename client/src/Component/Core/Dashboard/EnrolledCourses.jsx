import { useEffect, useState } from "react";
import { getUserEnrolledCourses } from "../../../Services/oprations/profileAPI";
// import { ProgressBar } from "@ramonak/react-progress-bar"
import { useSelector } from "react-redux";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourse, setEnrolledCourse] = useState(null);

  const getEnrolledCourse = async ()=>{
    try{
        const response = await getUserEnrolledCourses(token);
        setEnrolledCourse(response)

    }catch(error){
        console.log("Error in enrolled courses...", error);
        console.log("Unable to Fetch Enrolled Courses");
    }
  }
  useEffect(()=>{
    getEnrolledCourse();
  },[])

  return (
    <>
      <div className="text-white">
        <div>
          <h1>Enrolled courses</h1>
          {!enrolledCourse ? (
            <div>Loading....</div>
          ) : !enrolledCourse.length ? (
            "Avi koi course nahi hai"
          ) : (
            <div>
              <div>
                <p>Course Name</p>
                <p>Durations</p>
                <p>Progress</p>
              </div>
              {enrolledCourse.map((course, i) => (
                <div>
                  <div>
                    <img src={course.thumbnail} />
                    <div>
                      <p>{course.courseName}</p>
                      <p>{course.courseDescription}</p>
                    </div>
                  </div>

                  <div>{course?.totalDuration}</div>

                    <div>
                        <p>Progress bar: {course?.progressPercentage || 0}%</p>
                        <ProgressBar 
                        completed={course?.progressPercentage || 0}
                        />
                    </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default EnrolledCourses;
