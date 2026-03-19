import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../Services/oprations/studentFeaturesAPI";
import { fetchCourseDetails } from "../Services/oprations/courseAPI";

const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  

  useEffect(() => {
        const getCourseFullDetails = async () => {
        try{
            const result = await fetchCourseDetails();

        console.log("CourseData......", result);
        setCourseData(result)
        }catch(error){
            console.log("Could not fetch course data", error)
        }
        getCourseFullDetails();
      }
  }, [courseId]);

  const handleBuyCourse = () => {
    console.log("inside handlebuycourse");
    console.log("CourseId......", courseId);
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
  };

  return (
    <>
      <div>
        <div className="pt-[150px] mx-auto  w-11/12 max-w-[1260px] items-center text-white  border-yellow-100">
          {/* <button className='bg-yellow-50 px-6 py-2 text-richblack-900 cursor-pointer'
            onClick={handleBuyCourse}
            >Buy Now</button> */}

          <div className="flex flex-col gap-3 ">
            <h5 className="text-3xl font-semibold">Heading</h5>
            <p className="text-md text-richblack-400 ">Description</p>
            <div className="flex gap-2 items-center ">
              <span>start</span>
              <span>reviews</span>
              <span>totalStudent</span>
            </div>
            <div>
              <p>Created By: Rahul kumar</p>
            </div>
            <div>
              <p>Created at: </p>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
