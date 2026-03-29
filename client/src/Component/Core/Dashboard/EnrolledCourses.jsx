import { useEffect, useState } from "react";
import { getUserEnrolledCourses } from "../../../Services/oprations/profileAPI";
import  ProgressBar from "@ramonak/react-progress-bar"
import { useSelector } from "react-redux";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourse, setEnrolledCourse] = useState(null);
  // console.log("EnrolledCourse data", enrolledCourse)

  const getEnrolledCourse = async ()=>{
    try{
        const response = await getUserEnrolledCourses(token);
        setEnrolledCourse(response)
        // console.log("EnrolledCourse response", response)
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
      <div className="text-white mx-8">
        <div>
          <h1>Enrolled courses</h1>
          {!enrolledCourse ? (
            <div>Loading....</div>
          ) : !enrolledCourse.length ? (
            "Avi koi course nahi hai"
          ) : (
            <div className="my-8 text-richblack-5">
              <div className="flex rounded-t-lg bg-richblack-500"> 
                <p className="w-[45%] px-5 py-3">Course Name</p>
                <p className="w-1/4 px-2 py-3">Duration</p>
                <p className="flex-1 px-2 py-3">Progress</p>

              </div>
              {enrolledCourse.map((course, i) => (
                <div key={i} className="flex items-center  border-richblack-700">
                  <div className="flex gap-2 my-4">
                    <img src={course.thumbnail} className="w-20 h-20 rounded-lg object-cover"/>
                    <div>
                      <p className="font-semibold">{course.courseName}</p>
                      <p className="text-md text-richblack-300">{course.courseDescription.length > 50 ? `${course.courseDescription.slice(0,50)}`: course.courseDescription}</p>
                    </div>
                  </div>

                  <div className="w-1/4 px-2 py-3">{course?.totalDuration}2:30</div>

                    <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                        <p>Progress {course?.progressPercentage || 0}%</p>
                        <ProgressBar
                        completed={course?.progressPercentage || 0}
                        height="8px"
                        isLabelVisible={false}
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
