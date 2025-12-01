import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setStep, setCourse } from "../../../../../Redux/slices/courseSlice";
import { IconBtn } from "../../../../Common/IconBtn";
import {
  addCourseDetails,
  editCourseDetails,
} from "../../../../../Services/oprations/courseAPI";
import toast from "react-hot-toast";
import RequirementField from "./RequirementField";


const CourseInfoForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [courseCatgeory, setCourseCategory] = useState([]);
  const { course, editCourse } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTitle !== course.courseName ||
      currentValues.benefitsOfCourse !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFormSubmit = async (data) => {
    if (editCourse) {
      if (isFormUpdated()) {
        const currentValues = getValues();
        const formData = new FormData();

        formData.append("courseId", course._id);
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle);
        }

        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc);
        }

        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice);
        }

        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits);
        }

        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory);
        }

        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          );
        }

        setLoading(true);
        const result = await editCourseDetails(formData, token);
        setLoading(false);
        if (result) {
          setStep(2);
          dispatch(setCourse(result));
        } else {
          toast.error("No changes till now");
        }
      }
      return;
    }

    // create new course
    const formData = new FormData();
    formData.append("coursName", data.courseName);
    formData.append("courseShortDesc", data.courseShortDesc);
    formData.append("price", data.coursePrice);
    formData.append("whatYouWillLearn", data.benefitsOfCourse);
    formData.append("category", data.courseCategory);
    formData.append("instructions", JSON.stringify(data.courseRequirements));
    formData.append("status", COURSE_STATUS.DRAFT);

    setLoading(true);
    const result = await addCourseDetails(formData, token);
    if (result) {
      setStep(2);
      dispatch(setCourse(result));
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className=" rounded-[8px] bg-richblack-800 p-6 flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="courseTitle" className="text-richblack-5 text-[14px]">
            {" "}
            Course Title
            <sup className="text-pink-500">*</sup>
          </label>
          <input
            type="text"
            id="courseTitle"
            name="courseTitle"
            placeholder="Enter course title"
            {...register("courseTitle", { required: true })}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
          />
          {errors.courseTitle && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              course title is required**
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="courseShortDesc"
            className="text-richblack-5 text-[14px]"
          >
            Course Description
            <sup className="text-pink-500">*</sup>
          </label>
          <textarea
            type="text"
            id="courseShortDesc"
            placeholder="Course Description"
            {...register("courseShortDesc", { required: true })}
            cols={20}
            rows={5}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
          />
          {errors.courseShortDesc && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              course description is required**
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="price" className="text-richblack-5 text-[14px]">
            {" "}
            Price
            <sup className="text-pink-500">*</sup>
          </label>
          <input
            id="price"
            name="price"
            placeholder="Enter course price"
            {...register("price", { required: true, valueAsNumber: true })}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
          />
          {errors.price && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              course price is required**
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="courseCategory">Course Category</label>
          <select
            id="courseCategory"
            placeholder="choose a category"
            {...register("courseCategory", { required: true })}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
          >
            <option value="" disabled>
              choose category
            </option>
            {
              // agar loading false hai to catageory dikaho
              !loading &&
                courseCatgeory.map((category, index) => (
                  <option value={category?._id} key={index}>
                    {category?.name}
                  </option>
                ))
            }
          </select>
          {errors.courseCatgeory && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              course category is required**
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          <label
            htmlFor="benefitsOfCourse"
            className="text-richblack-5 text-[14px]"
          >
            Benefits of the course
            <sup className="text-pink-500">*</sup>
          </label>
          <textarea
            type="text"
            id="benefitsOfCourse"
            placeholder="Course Benefits"
            {...register("benefitsOfCourse", { required: true })}
            cols={20}
            rows={5}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
          />
          {errors.benefitsOfCourse && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Benefits of the course are required**
            </span>
          )}
        </div>
        <div>
          <RequirementField
            name="courseRequirements"
            label="Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues = {getValues}
          />
        </div>
        <div>
          <IconBtn text={!editCourse ? "Next" : "Save changes"} />
        </div>
      </form>
    </>
  );
};

export default CourseInfoForm;
