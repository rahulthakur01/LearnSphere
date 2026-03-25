import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { GiNinjaStar } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4">
      {cart.map((course, i) => (
        <div key={course._id} className={`flex flex-between items-start flex-wrap`}>

          <div className="flex gap-4">
            <div>
              <img
                src={course?.thumbnail}
                alt="course"
                className="w-[220px] h-[148px] object-cover"
              />
            </div>

            <div className="flex flex-col space-y-1">
            <h3 className="text-lg font-medium text-richblack-5">
                {course?.courseName}
              </h3>
              <p className="text-sm text-richblack-300">
                {course?.category?.name}
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span>4.7</span>
                <ReactStars
                  count={5}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<GiNinjaStar />}
                  fullIcon={<GiNinjaStar />}
                />
                <span>
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button className="flex items-center gap-1 text-red-500">
              <RiDeleteBin6Line />
              <span>remove</span>
            </button>

            <p className="font-semibold">Rs {course?.price}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;