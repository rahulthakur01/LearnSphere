import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constant";
import toast from "react-hot-toast";
import { addToCart } from "../../../Redux/slices/cartSlice";

const CourseCardDetails = ({course, setConfirmationModal, handleBuyCourse,}) => {
  const { user } = useSelector((state) => state.profile);
  const {token} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart =()=>{
    if(user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR){
      toast.error("You're instructor, you can't buy this course")
      return
    }

      if(token){
        dispatch(addToCart(course))
        return
      }
    setConfirmationModal({
      text1:"You're not logged in",
      text2:"Please login to add to cart",
      btnText1:"Login",
      btnText2:"Cancel",
      btnHandler1: ()=>(navigate("/login")),
      btnHandler2: ()=>(setConfirmationModal(null))
    })

  }

  return (
    <div>
      <div>
        <div className="w-[400px] h-auto flex flex-col gap-3 bg-richblack-800 rounded-md z-50 p-4 ">
          <div>
            <img
              src={course?.thumbnail}
              alt="thumbnail"
              className="w-full h-[180px] object-cover rounded-md"
            />
          </div>
          <h2 className="text-2xl font-semibold ">Rs. {course?.price}</h2>

          <div className="flex flex-col gap-3">
            <button
              className="bg-yellow-50 px-6 py-2 text-richblack-900 cursor-pointer rounded-md "
              onClick={
                user && course?.studentsEnrolled?.includes(user._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
              {user && course?.studentsEnrolled?.includes(user._id)
                ? "Go to courses"
                : "Buy Now"}
            </button>
            {
              (!user || !course.studentsEnrolled.includes(user?._id)) && (
                <button onClick={handleAddToCart}
                className="bg-richblack-900 px-6 py-2 text-richblack-50 cursor-pointer rounded-md">
                Add to cart
              </button>
              )
            }
          
          </div>

          <div>
            <p className="text-richblack-50 text-center">
              30 days Money-back gurantee
            </p>
            <p className="text-richblack-5 text-xl my-2">This course includes:</p>
            <div className="">
              {course?.instructions?.map((item, i) => (
                <p key={i}>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardDetails;
