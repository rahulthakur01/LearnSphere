import { apiConnector } from "../apiConnector";
import {courseDetailsEndpoints} from "../api"
const {CREATE_COURSE_API, EDIT_COURSE_API, COURSE_CATEGORY_API } = courseDetailsEndpoints
import toast from "react-hot-toast";

export const courseCategory = ()=>{
    
}

export const addCourseDetails = async(data, token)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", CREATE_COURSE_API, data,{
            Authrization: `Bearer ${token}`
        })

        console.log('ADd COURSE API RESPONSE....', response);
        if(!response?.data?.success){
         throw new Error("Counld not add course")
        }
        result = response?.data?.data;

    }catch(error){
        console.log("ADD COURSE API ERROR.....", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId);
    return result;

}

export const editCourseDetails =async (data, token)=>{

    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", EDIT_COURSE_API, data, {
            Authrization: `Bearer ${ token}`
        })
       console.log('EDIT COURSE API RESPONSE....', response);
       if(!response?.data?.success){
        throw new Error("Counld not update course")
       }
       toast.success("Course Details Updated Successfully")
       result = response?.data?.data;
    }catch(error){
        console.log("EDIT COURSE API ERROR...........", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;

}