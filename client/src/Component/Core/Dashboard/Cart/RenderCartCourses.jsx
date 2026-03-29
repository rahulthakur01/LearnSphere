import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { GiNinjaStar } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeCart } from "../../../../Redux/slices/cartSlice";

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 w-full ">
      {cart.map((course, i) => (
        <div
          key={course._id}
          className={`w-full flex justify-between items-start flex-wrap gap-6 `}
        >
          <div className="flex flex-1 flex-col gap-4 xl:flex-row">
            <img
              src={course?.thumbnail}
              alt="course"
              className="w-[220px] h-[148px] object-cover"
            />

            <div className="flex flex-col space-y-1">
              <h3 className="text-lg font-medium text-richblack-5">
                {course?.courseName}
              </h3>
              <p className="text-sm text-richblack-300">
                {course?.category?.name}
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-50">4.7</span>
                <ReactStars
                  count={5}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<GiNinjaStar />}
                  fullIcon={<GiNinjaStar />}
                />
                <span  className="text-richblack-400">{course?.ratingAndReviews?.length} Ratings</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 space-y-2">
            <button onClick={()=>dispatch(removeCart(course))}
            className="flex items-center gap-1 text-red-500 rounded-md border border-richblack-600 py-2 px-[12px] bg-richblack-600 gap-x-1">
              <RiDeleteBin6Line />
              <span>remove</span>
            </button>

            <p className="mb-6 text-3xl font-medium text-yellow-100">
              Rs {course?.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourses;
