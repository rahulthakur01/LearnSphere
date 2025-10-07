import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighLightText from './HighLightText';
import CTAbutton from './Button'
import { FaArrowRight } from "react-icons/fa6";

const InstructorSection = () => {
  return (
    <>
        <section className='mt-16'>
            <div className='flex flex-row gap-20 itmes-center'>
                <div className='w-[50%]'>
                    <img src={Instructor} alt='Instructor'/>
                </div>

                <div className='flex flex-col justify-center gap-10 w-[50%] '>
                    <div className='text-4xl font-semobold'>
                        Become an
                        <HighLightText text={"Instructor"}/>
                    </div>
                    <div className='font-medium text-[16px] w-[80%] text-richblack-300'>
                        <p>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                    </div>

                    <div className='w-fit'>
                        <CTAbutton active={true} linkto={"/login"}>
                        <div className='capitalize flex items-center gap-2'>
                            start learnig today 
                            <FaArrowRight/>
                        </div>
                        </CTAbutton>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default InstructorSection