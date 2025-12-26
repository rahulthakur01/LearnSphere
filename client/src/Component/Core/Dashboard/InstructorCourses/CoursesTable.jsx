import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { LuClock8 } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import ConfirmationModal from "../../../Common/ConfirmationModal";
import { COURSE_STATUS } from "../../../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../../../Services/oprations/courseAPI";
import { fetchInstructorsCourses } from "../../../../Services/oprations/courseAPI";
import { formatDate } from "../../../../Services/formDate";

const CourseTable = ({ courses, setCourses }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const TRUNCATE_LENGTH = 15;
  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorsCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false)
  };

  return (
    <>
      <div>
        <Table className="rounded-xl border border-richblack-800 ">
          <Thead>
            <Tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
              <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
                Courses
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                Duration
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                Price
              </Th>
              <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                Actions
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {courses?.length === 0 ? (
              <Tr>
                <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                  No courses found
                </Td>
              </Tr>
            ) : (
              courses?.map((course) => (
                <Tr
                  key={course._id}
                  className="flex gap-x-10 justify-between border-b border-richblack-800 px-6 py-8"
                >
                  <Td className="flex gap-5">
                    <img
                      src={course?.thumbnail}
                      alt={course?.courseName}
                      className="h-[148px] w-[220px] rounded-lg object-cover"
                    />
                    <div className="text-richblack-5 flex flex-col gap-4">
                      <h1 className="text-lg font-semibold text-richblack-5">{course?.courseName}</h1>
                      <p className="text-xs text-richblack-300">{course?.courseDescription.split(" ").length > TRUNCATE_LENGTH ? course.courseDescription.split(" ").slice(0, TRUNCATE_LENGTH).join(" ")+"..." : course.courseDescription}</p>
                      <p className="text-xs text-richblack-300">Created: {formatDate(course?.createdAt)}</p>
                      {course.status === COURSE_STATUS.DRAFT ? (
                        <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                          <LuClock8 size={14} />
                          Drafted
                        </p>
                      ) : (
                        <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                            <FaCheckCircle size={8} />
                          </div>
                          Published
                        </p>
                      )}
                    </div>
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    2hr 30min
                  </Td>
                  <Td className="text-sm font-medium text-richblack-100">
                    ₹{course.price}
                  </Td>

                  <Td className="text-sm font-medium text-richblack-100 ">
                    <button onClick={()=> navigate(`/dashboard/edit-course/${course._id}`)}
                    className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300">
                      <MdEdit />
                    </button>
                    <button
                      onClick={() =>
                        setConfirmationModal({
                          text1: "Do you want to delete this course?",
                          text2:
                            "All the data related to this course will be deleted",
                          btnText1: !loading ? "Delete" : "loading",
                          btnText2: "Cancel",
                          btn1Handler: () => handleCourseDelete(course._id),
                          btn2Handler: () => setConfirmationModal(null),
                        })
                      }
                      className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                    >
                      <MdOutlineDeleteForever />
                    </button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
        {confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )}
      </div>
    </>
  );
};
export default CourseTable;
