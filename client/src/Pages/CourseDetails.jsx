import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { buyCourse } from "../Services/oprations/studentFeaturesAPI";
import { fetchCourseDetails } from "../Services/oprations/courseAPI";
import GetAvgRating from "../utils/aveRating";
import RatingStars from "../Component/Common/RatingStars";
import { formatDate } from "../Services/formDate";
import CourseCardDetails from "../Component/Core/Course/CourseCardDetails";

const CourseDetails = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const [courseData, setCourseData] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    const getCourseFullDetails = async () => {
      try {
        const result = await fetchCourseDetails(courseId);

        console.log("CourseData......", result);
        setCourseData(result);
      } catch (error) {
        console.log("Could not fetch course data", error);
      }
    };
    getCourseFullDetails();
  }, [courseId]);

  const [avgRatingCount, setAvgRatingCount] = useState(0);
  useEffect(() => {
    const countAvg = GetAvgRating(courseData?.data?.ratingAndReviews);
    setAvgRatingCount(countAvg);
  }, [courseData]);

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "you're not logged in ",
      text2: "Please login to purchase the course",
      btnText1: "Login",
      btnText2: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (loading || !courseData) {
    return <div>Loading...</div>;
  }

  const {
    courseName,
    courseDescription,
    price,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
    thumbnail,
    whatYouWillLearn,
  } = courseData?.data;

  return (
    <>
      <div>
        <div className=" bg-richblack-700">
          <div className="pt-[150px] mx-auto  w-11/12 max-w-[1260px] items-center text-white border-yellow-100">
            <div className="relative flex flex-col gap-3 ">
              <h5 className="text-3xl font-semibold">{courseName}</h5>
              <p className="text-md text-richblack-400 ">{courseDescription}</p>
              <div className="flex gap-2 items-center ">
                <span>{avgRatingCount}</span>
                <RatingStars Review_Count={avgRatingCount} Star_Size={24} />
                <span>{`(${ratingAndReviews.length} reviews) `}</span>
                <span>{`(${studentsEnrolled.length} students enrolled)`}</span>
              </div>
              <div>
                <p>Created By: {`${instructor.firstName}`}</p>
              </div>
              <div>
                <p>Created at: {formatDate(createdAt)} </p>
                <p>English</p>
              </div>

              <div className="absolute top-2 right-8 ">
                <CourseCardDetails
                  course={courseData?.data}
                  setConfirmationModal={setConfirmationModal}
                  handleBuyCourse={handleBuyCourse}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-11/12 max-w-[1260px] items-center  mx-auto text-white  py-[50px]">
          <div className=" w-[60%]">
            <div className="flex flex-col gap-2 w-full max-w-3xl border border-richblack-700 rounded-lg p-6 bg-richblack-900 ">
              <h2 className="text-xl font-semibold">What you will learn</h2>
              <p>{whatYouWillLearn}</p>
            </div>

            <div className="my-4">
              <h2 className="text-2xl font-semibold">Course Content</h2>
              <div className="flex justify-between py-2">
                <div className="flex gap-2 items-center">
                  <span>sections</span>
                  <span>lectures</span>
                  <span>10 total length</span>
                </div>

                <div>
                  <p className="text-yellow-200">Collaps of sections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
