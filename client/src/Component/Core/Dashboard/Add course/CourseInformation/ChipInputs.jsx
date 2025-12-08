import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { MdClose } from "react-icons/md";

const ChipInputs = ({label, name, placeholder, errors, register, setValue, getValues}) => {

    const {editCourse, course} = useSelector((state)=>state.course);
    const [chips, setChips] = useState([]);

    useEffect(()=>{
        // Edit mode me purane chips load karna
        if(editCourse){
            setChips(course?.tag);
        }
        register(name, {required:true, validate:(value)=> value.length > 0})
    },[])

    useEffect(()=>{
        // chips me changes ko track karke set karna
        setValue(name, chips);
    },[chips])

    const handleKeyDown=(e)=>{

        if(e.key ==='Enter' || e.key ===','){

            e.preventDefault();

            const chipsInputValue = e.target.value.trim();
           if(chipsInputValue && !chips.includes(chipsInputValue)){
             const newChips = [...chips, chipsInputValue];
             setChips(newChips);
             e.target.value=""
           }
        }

    }
    const handleDeleteChip=(chipIndex)=>{
        const updatedChip = chips.filter((ele, i)=> i !== chipIndex);
        setChips(updatedChip)
    }

  return (
    <>
    <div className='flex flex-col gap-y-2'>
        <label htmlFor={name} className="text-richblack-5 text-[14px] ">
            {label} <sup className="text-pink-200">*</sup>
        </label>
        <div className='flex items-center gap-x-2 flex-wrap'>
          {
            chips.map((chip, index)=>(
                <div key={index} className='flex items-center gap-1 cursor-pointer m-1 rounded-full bg-yellow-400 px-2 py-1 text-sm text-richblack-5'>
                    {chip}
                   <button type='button' onClick={()=>handleDeleteChip(index)}>
                   <MdClose />
                   </button>
                </div>
            ))
          }
        </div>
        <input type='text' name={name} placeholder={placeholder} onKeyDown={handleKeyDown}
        className="w-full bg-richblack-700 text-[16px] rounded-lg text-richblack-5 leading-[24px] shadow-[0_0_5x_0] placeholder:text-richblack-200 p-3 focus:outline-none border-b border-richblack-300 focus:border-yellow-500"
        />
    </div>
    </>
  )
}

export default ChipInputs