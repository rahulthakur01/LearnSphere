import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconBtn from "../../../../Common/IconBtn";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { MdEdit } from "react-icons/md";


const CourseBuilderForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [editSectionName, setEditSectionName] = useState(true)

  const cancelEdit = ()=>{

  }

  const onSubmit = ()=>{

  }

  return (
    <>
      <div>
        <div className="bg-richblack-800 rounded-md p-6 flex flex-col gap-6">
          <h1 className="text-2xl leading-8 font-semibold">Course Builder</h1>
          <form className="flex flex-col gap-2 " onSubmit={handleSubmit(onSubmit)}>
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
            {
              errors.sectionName && (
                <span className="-mt-1 text-[12px] text-yellow-100">Section name is required**</span>
              )
            }
            {/* button */}
            <div className="mt-6">
              <IconBtn text={editSectionName ? "Edit Section Name" : "Course Name"} customClass=" text-yellow-200 border ">
                  <IoAddCircleOutline fontSize={20} />
              </IconBtn>

                {
                  editSectionName && (
                    <button type="button" className='text-sm text-richblack-300 underline ml-10 cursor-pointer' onClick={cancelEdit}>   
                      Cancel Edit               
                    </button>
                  )
                }
            </div>
          </form>

          {/* bottom buton */}
          <div>
            <button >
              Back
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default CourseBuilderForm;
