import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const RequirementField = ({ name, label, register, setValue }) => {
  const [requirement, setRequirement] = useState("");
  const [requirementList, setRequirementList] = useState([]);
  const {editCourse, course} = useSelector((state)=>state.course)

  useEffect(() => { 
    if(editCourse){
      setRequirementList(course?.instructions)
    }
    register(name, {
      required:true,
    })
  },[])

  useEffect(() => {
    setValue(name, requirementList)
  },[requirementList])

  const handleAddRequirement = () => {
    setRequirementList([...requirementList, requirement]);
    setRequirement("")
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirementList = [...requirementList];
    updatedRequirementList.splice(index, 1);
    setRequirementList(updatedRequirementList);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor={name}>{label}  <sup className="text-pink-500">*</sup></label>
          <input
            id={name}
            type="text"
            value={requirement}
            placeholder="Enter instructions"
            onChange={(e) => setRequirement(e.target.value)}
            className="bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
          />
          <button
          type='button'
            className="text-yellow-50 w-fit"
            onClick={handleAddRequirement}
          >
            Add
          </button>
        </div>
        {requirementList.length > 0 && (
          <ul>
            {requirementList.map((require, index) => (
              <li key={index} className="flex items-center gap-1 ">
                <span className="text-richblack-5"> {require}</span>
                <button  onClick={() => handleRemoveRequirement(index)} className="text-richblack-200 cursor-pointer">
                  clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default RequirementField;
