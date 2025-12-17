import React from 'react'
import {useForm} from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import IconBtn from '../../../../Common/IconBtn';

const PublishCourse = () => {

    const navigate = useNavigate();
    const disptach = useDispatch();
    const {course} = useSelector((state)=>state.course);
    const {token} = useSelector((state)=>state.auth)

    const { register, formState:{errors}, setValue, getValues} = useForm();

  return (
    <>
         <div>
            <div>
                <h1>Publish Settings</h1>
                <form>
                    <label htmlFor='public'>
                        <input
                         type='checkbox'
                         id='public'
                         />
                         <span className="ml-2 text-richblack-400">
                         Make this course as public
                       </span>
                    </label>

                    <div>
                        <button className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
                         type='button'
                         onClick={goBackHandler}
                        >
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