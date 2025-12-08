import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconBtn from "../../../../Common/IconBtn";
import { IoAddCircleOutline, IoHandRightSharp } from "react-icons/io5";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { setStep, setEditCourse } from "../../../../../Redux/slices/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import NestedView from "./NestedView";

const CourseBuilderForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue} = useForm();
  const {course, editCourse} = useSelector((state)=>state.course)
  const [editSectionName, setEditSectionName] = useState(true);
  const dispatch = useDispatch();

  // onSumbit
  const onSubmit = () => {};
  //  Cancel Edit
  const cancelEdit = () => {
    setEditSectionName(null)
    setValue("sectionName", "")
  };

  // goBackHandler
  const goBackHandler = () => {
   dispatch(setStep(1));
   dispatch(setEditCourse(true))

  };

  //goToNextHandler
  const goToNextHandler = () => {
    if(course?.courseContent?.length  === 0){
      toast.error("Add atleast one Section ");
      return;
    }
    if(course?.courseContent?.some((section)=> section.courseContent?.length ===0)){
      toast.error("Add atleat one SubSection in section");
      return;
    }
    setStep(3)
  };
  return (
    <>
      <div>
        <div className="bg-richblack-800 rounded-md p-6 flex flex-col gap-6">
          <h1 className="text-2xl leading-8 font-semibold">Course Builder</h1>
          <form
            className="flex flex-col gap-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              Section Name <sup className="text-pink-500">*</sup>
            </label>
            <input
              id="sectionName"
              name="sectionName"
              placeholder="Demo Section 1"
              {...register("sectionName", { required: true })}
              className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-sm placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
            />
            {errors.sectionName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Section name is required**
              </span>
            )}
            {/* button */}
            <div className="mt-6">
              <IconBtn
                text={editSectionName ? "Edit Section Name" : "Course Name"}
                customClass={" text-white-200 border "}
              >
                <IoAddCircleOutline fontSize={20} />
              </IconBtn>

              {editSectionName && (
                <button
                  type="button"
                  className="text-sm text-richblack-300 underline ml-10 cursor-pointer"
                  onClick={cancelEdit}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
            
            {/* Course Section */}
          <div>
              <NestedView  />
          </div>

          {/* bottom buton */}
          <div className="flex justify-end  gap-x-4">
            <button
              onClick={goBackHandler}
              className="bg-richblack-700 px-8 py-2 rounded-md cursor-pointer"
            >
              Back
            </button>
            <IconBtn type="button" text="Next" onclick={goToNextHandler}>
              <IoMdArrowDropright fontSize={20} />
            </IconBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseBuilderForm;
