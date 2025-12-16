import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { createSubSection, updateSubSection } from "../../../../../Services/oprations/courseAPI";
import { useSelector, useDispatch } from "react-redux";
import Upload from "../Upload";
import toast from "react-hot-toast";
import { setCourse } from "../../../../../Redux/slices/courseSlice";
import IconBtn from "../../../../Common/IconBtn";
const SubSectionModal = ({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (view || edit) {
      setValue("lectureTitle", modalData.title);
      setValue("lectureDesc", modalData.description);
      setValue("lectureVideo", modalData.videoUrl);
    }
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues();
    if (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl
    ) {
      return true;
    } else {
      return false;
    }
  };
  // Edit Sub Section
  const handleEditSubSection = async() => {
    const currentValues = getValues();
    const formData = new FormData();

    formData.append("sectionId", modalData.sectionId);
    formData.append("subSectionId", modalData._id);
    // console.log("ModalDAta.section...........", modalData.sectionId)
    // console.log(" modalData._id...........",  modalData._id)


    if (currentValues.lectureTitle !== modalData.title) {
      formData.append("title", currentValues.lectureTitle);
    }

    if (currentValues.lectureDesc !== modalData.description) {
      formData.append("description", currentValues.lectureDesc);
    }

    if (currentValues.lectureVideo !== modalData.videoUrl) {
      formData.append("video", currentValues.lectureVideo);
    }

    setLoading(true);

    const result = await updateSubSection(formData, token);
    if(result){
      const updatedCourseContent = course?.courseContent.map((section)=>(
        section._id === modalData.sectionId ? result: section
      ))
      const updatedCourse = {...course, courseContent: updatedCourseContent}
     dispatch(setCourse(updatedCourse))
    }
    setModalData(null);
    setLoading(false);

  };

  const handleOnSubmit = async(data) => {
    console.log("MODAL DATA 👉", modalData);
    console.log("SECTION ID 👉", modalData?.sectionId);
    if (view) {
      return;
    }
    if (edit) {
      if (!isFormUpdated()) {
        toast.error("Avi kuch change nahi hua hai.");
      } else {
        handleEditSubSection();
      }
      return;
    }

    // New SubSection create
    const formData = new FormData();
    formData.append("sectionId", modalData.sectionId);
    formData.append("title", data.lectureTitle);
    formData.append("description", data.lectureDesc);
    formData.append("video", data.lectureVideo);
    setLoading(true);
    //API CALL
    const result = await createSubSection(formData, token);
    console.log("RESULT..........", result)
    if(result) {
       const updatedCourseContent = course.courseContent.map((section)=>(
        section._id === modalData.sectionId ? result : section
       ))
       const updatedCourse = {...course, courseContent: updatedCourseContent}
        dispatch(setCourse(updatedCourse))
    }
    setModalData(null);
    setLoading(false);
  };

  return (
    
    <div className="fixed inset-0 bg-slate-800/50 bg-opacity-10 backdrop-blur-sm grid place-items-center overflow-auto z-[1000] !mt-0">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
        <div className="flex justify-between items-center px-2 py-6">
          <p className="text-xl font-semibold text-richblack-5">
            {add && "Adding"} {view && "viewing"}
            {edit && "Editing"} Lecture
          </p>
        
          <button
            onClick={ ()=>
              (!loading ? setModalData(null) : <span> kuch mat dikho </span>)
            }
          >
            <RxCross2 fontSize={22}/>
          </button>
         
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-8 px-8 py-10">
            <Upload
              label="Lecture Video"
              name="lectureVideo"
              register={register}
              errors={errors}
              setValue={setValue}
              video={true}
              viewData={view ? modalData.videoUrl : null}
              editData={edit ? modalData.videoUrl : null}
            />

            <div className="flex flex-col gap-2 ">
            <label htmlFor="lectureTitle" className="text-richblack-5 text-[14px]">
            {" "}
            Course Title
            <sup className="text-pink-500">*</sup>
          </label>
              <input
                id="lectureTitle"
                name="lectureTitle"
                {...register("lectureTitle", { required: true })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"

              />
              {errors.lectureTitle && <span className="text-yellow-50 text-xs tracking-wide">Lecture title is required**</span>}
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="lectureDesc" className="text-richblack-5 text-[14px]">Lecture Description</label>
              <textarea
                id="lectureDesc"
                name="lectureDesc"
                {...register("lectureDesc", { required: true })}
                className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none"
              />
              {errors.lectureDesc && (
                <span className="text-yellow-50 text-xs tracking-wide">Lecture Description is required**</span>
              )}
            </div>
            {
              !view && (
                <div>
                  <IconBtn text ={edit ? "Save Changes": "Save"}/>
                </div>
              )
            }
          </form>
      </div>
    </div>
  );
};

export default SubSectionModal;
