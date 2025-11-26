import React from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import {GiNinjaStar} from "react-icons/gi"
import {RiDeleteBin6Line} from "react-icons/ri"

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <div>
        {cart.map((course, i) => (
          <div>

            <div>
              <div>
                <img src={course?.thumbnail} />
              </div>

              <div>
                <h1>{course?.courseName}</h1>
                <p>{course?.category?.name}</p>

                <div>
                  <span>4.7</span>
                  <ReactStars
                    count={5}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emtpyIcon={<GiNinjaStar />}
                    fullIcon={<GiNinjaStar />}
                  />
                  <span>{course?.ratingAndReviews?.length} Ratings</span>
                </div>

              </div>
            </div>
            <div>
              <button>
               <RiDeleteBin6Line/>
               <span>remove</span>
              </button>
              <p>Rs {course?.price}</p>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default RenderCartCourses;
