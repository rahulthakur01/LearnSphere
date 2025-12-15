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

    formData.append("sectionId", modalData.section._id);
    formData.append("subSectionId", modalData._id);

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
     dispatch(setCourse(result))
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
      if (!isFormUpdated) {
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
    <>
      <div>
        <div className="flex justify-between items-center px-2 py-6">
          <p>
            {add && "Adding"} {view && "viewing"}
            {edit && "Editing"} Lecture
          </p>
        
          <button
            onClick={ ()=>
              (!loading ? setModalData(null) : <span> kuch mat dikho </span>)
            }
          >
            <RxCross2 />
          </button>
         
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
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

            <div>
              <label htmlFor="lectureTitle">Lecture Title</label>
              <input
                id="lectureTitle"
                name="lectureTitle"
                {...register("lectureTitle", { required: true })}
              />
              {errors.lectureTitle && <span>Lecture title is required**</span>}
            </div>
            <div>
              <label htmlFor="lectureDesc">Lecture Description</label>
              <input
                id="lectureDesc"
                name="lectureDesc"
                {...register("lectureDesc", { required: true })}
              />
              {errors.lectureDesc && (
                <span>Lecture Description is required**</span>
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
    </>
  );
};

export default SubSectionModal;
