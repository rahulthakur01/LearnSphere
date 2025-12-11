import React, { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import ConfirmationModal from "../../../../Common/ConfirmationModal";
import { deleteSection } from "../../../../../Services/oprations/courseAPI";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../../../../../Redux/slices/courseSlice";

const NestedView = ({ hanldeChangeEditSectionName }) => {

  const {course} =  useSelector((state)=>state.course)
  const dispatch = useDispatch();
  const [confirmationModal, setConfiratonModal] = useState(null)

  const handleDeleteSection= async(sectionId)=>{
      const result = await deleteSection({
        sectionId,
        courseId: course._id
      }, token)
    if(result){
      dispatch(setCourse(result));
    }
    setConfiratonModal(null)
  }

  return (
    <>
      <div className="rounded-lg bg-richblack-700 p-6 px-8">

      {
        course?.courseContent?.map((section)=>(
          <details key={section._id}  className="flex flex-col gap-4">
          <summary className="flex items-center justify-between gap-x-3 border-b-2 ">
            <div className="flex gap-2 items-center ">
              <RxDropdownMenu />
              <h2>{section.sectionName}</h2>
            </div>
            <div className="flex gap-2 items-center ">
              <button onClick={()=>hanldeChangeEditSectionName(section._id, section.sectionName)}>
                <MdEdit fontSize={20} />
              </button>
              <button onClick={ ()=>setConfiratonModal({
                text1:"Delete this section",
                text2:"All lectures will be deleted in this section",
                btnText1:"Delete",
                btnText2:"Cancel",
                btn1Handler: ()=> handleDeleteSection(section._id),
                btn2Handler: () => setConfiratonModal(null),
              })}>
                <MdOutlineDeleteForever fontSize={20} />
              </button>
              <span>|</span>
              <span>
                <FaCaretDown fontSize={20} />
              </span>
            </div>
          </summary>
          {/* Sub Section */}
          
             <div>
               {
                section?.subSection?.map((subsection)=>(
                  <div className="flex items-center justify-between gap-x-3 border-b-2 ml-5">
                  <div className="flex gap-2 items-center ">
                    <RxDropdownMenu />
                    <h2>{subsection.title}</h2>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <button>
                      <MdEdit fontSize={20} />
                    </button>
                    <button>
                      <MdOutlineDeleteForever fontSize={20} />
                    </button>
                   
                  </div>
                </div>
                ))
               }
               <button className="flex gap-2 items-center my-4 text-yellow-50" >
                 <IoAddCircleOutline fontSize={22}/>
                 <span>Add Course</span>
               </button>
             </div>
          

        </details>
        ))
      }

       {
        confirmationModal && (
          <ConfirmationModal modalData={confirmationModal}/>
        )
       }
        
      </div>
    </>
  );
};

export default NestedView;
