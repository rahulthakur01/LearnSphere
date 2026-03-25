import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from "../../../Common/IconBtn"
const RenderTotalAmount = () => {
  const {total, cart} = useSelector((state)=>state.cart);
  const handleBuyCourse=()=>{
     
  }
  return (
    <>
    <div className=''>
      <h1 className='text-richblack-400'>Total</h1>
      <p className='text-yellow-100 font-semibold text-xl'>Rs {total}</p>

      <IconBtn text="Buy now" onclick={handleBuyCourse} customClasses={"w-full justify-center"}/>
    </div>
    </>
  )
}

export default RenderTotalAmount