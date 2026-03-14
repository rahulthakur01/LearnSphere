import React from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { buyCourse } from '../Services/oprations/studentFeaturesAPI';

const CourseDetails = () => {

    const {user} = useSelector((state)=>state.profile)
    const {token} = useSelector((state)=>state.auth);
    const navigate = useNavigate;
    const dispatch = useDispatch();
    const {courseId} = useParams();

    const handleBuyCourse= ()=>{
 
        if(token){
            buyCourse(token, [courseId], user, navigate, dispatch);
            return;
        }
    }


  return (
    <>
    <div >
        <div className='pt-[80px]'>
            <button className='bg-yellow-50 px-6 py-2 text-richblack-900 cursor-pointer'
            onClick={handleBuyCourse}
            >Buy Now</button>
        </div>
    </div>
        
    </>
  )
}

export default CourseDetails