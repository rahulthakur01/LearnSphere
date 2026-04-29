import React, { useEffect } from "react";
import IconBtn from "../Common/IconBtn";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Rating } from "@smastrom/react-rating";
import { useForm } from "react-hook-form";
import { createRating } from "../../Services/oprations/courseAPI";

const CourseReviewModal = ({ setReviewModal }) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
const{courseEntireData} = useSelector((state)=>state.viewCourse)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    setValue("courseExperience", "")
    setValue("courseRating", 0)
  },[])

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating);
  };

  const onSubmit = async(data) => {

    await createRating({
      courseId: courseEntireData._id,
      rating: data.courseRating,
      review: data.courseExperience,
    }, token)
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 bg-opacity-70">
        <div className="bg-richblack-800 rounded-lg p-6 w-[500px] text-white">
          <div className="flex justify-between items-center p-2 ">
            <h2>Add Review</h2>
            <button 
            onClick={()=>setReviewModal(false)}
            className="text-richblack-300 hover:text-white hover:bg-richblack-600 p-1 rounded-full transition-all duration-200">
              {" "}
              <RxCross2 size={20} />
            </button>
          </div>

          <div className=" mx-auto">
            <div className="flex items-center justify-center py-4 gap-3">
              <img
                src={user?.image}
                alt="user-image"
                className="w-15 h-15 rounded-full object-cover "
              />
              <div className="">
                <p>
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-richblack-400 text-xs">Posting publicly</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Rating style={{ maxWidth: 150 }} onChange={ratingChanged} />
            <div className="flex flex-col gap-2 my-2">
              <label
                htmlFor="course-experience"
                className="text-richblack-100 text-sm font-medium"
              >
                Add your experience <span className="text-pink-100">*</span>
              </label>
              <textarea
                name=""
                id="course-experience"
                cols={30}
                rows={5}
                placeholder="Add your exeprince"
                {...register("courseExperience", { required: true })}
                className="w-full bg-richblack-700 border border-richblack-600 focus:border-yellow-50 outline-none text-richblack-5 placeholder-richblack-400 rounded-lg px-4 py-3 text-sm resize-none transition-all duration-200"
              />
              {errors.courseExperience && (
                <span>Please add your experience</span>
              )}
            </div>
            <div className="flex items-center justify-end gap-3 px-2 py-4 ">
              <button
                onClick={() => setReviewModal(false)}
                className="px-5 py-2 text-sm font-medium text-richblack-200 bg-richblack-600 hover:bg-richblack-500 rounded-lg transition-all duration-200"
              >
                Cancel
              </button>
              <IconBtn text="Save Review" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseReviewModal;
