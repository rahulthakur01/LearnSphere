import React from 'react'
import {useForm} from 'react-hook-form'
import { IoChevronBack } from "react-icons/io5";

import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import IconBtn from '../../../../Common/IconBtn';
import { setStep } from '../../../../../Redux/slices/courseSlice';
import {COURSE_STATUS} from '../../../../../utils/constant'

const PublishCourse = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {course} = useSelector((state)=>state.course);
    const {token} = useSelector((state)=>state.auth)

    const { register, handleSubmit, formState:{errors}, setValue, getValues} = useForm();

    const goBackHandler = ()=>{
      dispatch(setStep(2))
    }
    const handleSubmitForm = ()=>{

      if((course?.status === COURSE_STATUS.PUBLISHED && getValues("public") === true) || course?.status === COURSE_STATUS.DRAFT && )

    }

  return (
    <>
         <div>
            <div className="bg-richblack-800 rounded-md p-6 flex flex-col gap-6">
                <h1 className="text-2xl font-semibold text-richblack-5">Publish Settings</h1>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <label htmlFor='public'>
                        <input
                         type='checkbox'
                         id='public'
                         />
                         <span className="ml-2 text-richblack-400">
                         Make this course as public
                       </span>
                    </label>

                    <div  className="ml-auto flex max-w-max items-center gap-x-4">
                        <button className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
                         type='button'
                         onClick={goBackHandler}
                        >
                          <IoChevronBack />
                            Back
                        </button>
                        <IconBtn text="Save Changes"/>
                    </div>
                </form>


            </div>
         </div>
    </>
  )
}

export default PublishCourse