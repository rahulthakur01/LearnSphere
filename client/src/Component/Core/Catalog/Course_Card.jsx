import React, { useEffect, useState } from "react";
import GetAvgRating from "../../../utils/aveRating";
import RatingStars from "../../Common/RatingStars";
import { Link } from "react-router-dom";

const Course_Card = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course?.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <>
      <Link to={`/course/${course._id}`}>
        <div className="text-white">
          <div>
            <img
              src={course?.thumbnail}
              alt=""
              className={`${Height} w-full rounded-xl object-cover`}
            />
          </div>
          <div>
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-5">{avgReviewCount || 0}</span>
                <RatingStars Review_Count={avgReviewCount} />
                <span className="text-richblack-400">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
              <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Course_Card;
