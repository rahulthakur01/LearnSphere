import { apiConnector } from "../apiConnector";
import {courseDetailsEndpoints} from "../api"
const {CREATE_COURSE_API, EDIT_COURSE_API, COURSE_CATEGORY_API } = courseDetailsEndpoints
import toast from "react-hot-toast";

export const fetchCourseCategory = async ()=>{
    let result = [];
    try {
        const response = await apiConnector("GET", COURSE_CATEGORY_API);
        console.log("COURSE_CATEGORIES_API API RESPONSE............", response)

        if (!response?.data?.success) {
            throw new Error("Could not fetch course categories")
        }

        result = response?.data?.data;
        toast.success("successfully fetch course categories")

    } catch (error) {
        console.log("COURESE CATEGORY API ERROR....", error);
        toast.error(error.message)
    }
    return result;
}

export const addCourseDetails = async(data, token)=>{
    let result = null;
    // console.log("Dataaaaa...", data);
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", CREATE_COURSE_API, data,{
            Authorization: `Bearer ${token}`
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