import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../Common/IconBtn";
import { IoMdAdd } from "react-icons/io";
import { fetchInstructorsCourses } from "../../../Services/oprations/courseAPI";
import CourseTable from "./InstructorCourses/CoursesTable";
const MyCourses = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    const fetchCourses = async() =>{
        const result = await fetchInstructorsCourses(token)
        setCourses(result);
    }
    fetchCourses();
  },[])

  return (
    <>
      <div className="">
        <div className="mb-14 flex items-center justify-between">
          <h1 className="text-2xl font-medium text-richblack-5">My Courses</h1>
          <IconBtn
            text="Add Course"
            onclick={() => navigate("/dashboard/add-course")}
          
          >  <IoMdAdd/></IconBtn>
        </div>
        {courses && <CourseTable courses={courses} setCourses={setCourses} />}
      </div>
    </>
  );
};

export default MyCourses;
