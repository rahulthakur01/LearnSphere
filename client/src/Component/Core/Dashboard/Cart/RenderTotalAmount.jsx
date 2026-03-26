import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from "../../../Common/IconBtn"
import { useNavigate } from 'react-router-dom';
import { buyCourse } from '../../../../Services/oprations/studentFeaturesAPI';
const RenderTotalAmount = () => {
  const {total, cart} = useSelector((state)=>state.cart);
  const {token} = useSelector((state)=>state.auth);
  const {user} = useSelector((state)=>state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBuyCourse=()=>{

    const courses = cart.map((course)=>course._id);
    buyCourse(token, courses, user, navigate, dispatch)

     
  }
  return (
    <>
    <div className='flex flex-col gap-3 border bg-richblack-800 border-richblack-700 p-6 rounded-md min-w-[280px]'>
      <h1 className='text-richblack-400'>Total</h1>
      <p className='text-yellow-100 font-semibold text-xl'>Rs {total}</p>

      <IconBtn text="Buy now" onclick={handleBuyCourse} customClasses={"w-full justify-center"}/>
    </div>
    </>
  )
}

export default RenderTotalAmount