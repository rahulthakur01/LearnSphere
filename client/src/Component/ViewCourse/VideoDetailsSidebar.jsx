import React, { useEffect, useState } from "react";
import IconBtn from "../Common/IconBtn";
import {useParams, useLocation, useNavigate  } from "react-router-dom"
import { useSelector } from "react-redux";

const VideoDetailsSidebar = () => {

  const[activeStatus, setActiveStatus] = useState("")
  const[videoBarActive, setVideoBarActive] = useState("")
  const{sectionId, subSectionId} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const{courseSectionData, courseEntireData} = useSelector((state)=>state.viewCourse)


useEffect(()=>{
  const setActiveFlags = ()=>{
    if(!courseSectionData.length)
      return;
    const currentSectionIndex = courseSectionData.findIndex((data)=> data._id === sectionId)
  }

},[])

  return (
    <>
      <div>
        {/* for buttons */}
        <div className="flex flex-col ">
          <div className="flex justify-between p-4">
            <div>back</div>
            <div>
              <IconBtn text="Add Review" />
            </div>
          </div>
          {/* for heading */}
          <div className="px-4 py-2">
            <p className="font-semibold text-richblack-200 text-xl">My Courses</p>
            <p>Heading</p>
          </div>
        </div>
        {/*  section  and subsection*/}
        <div>


        </div>
      </div>
    </>
  );
};

export default VideoDetailsSidebar;
