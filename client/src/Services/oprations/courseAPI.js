import { apiConnector } from "../apiConnector";
import {courseDetailsEndpoints} from "../api"
const {CREATE_COURSE_API, EDIT_COURSE_API, COURSE_CATEGORY_API, CREATE_SECTION_API, UPDATE_SECTION_API, DELETE_SECTION_API } = courseDetailsEndpoints
import toast from "react-hot-toast";

export const fetchCourseCategory = async ()=>{
    let result = [];
    try {
        const response = await apiConnector("GET", COURSE_CATEGORY_API);
        // console.log("COURSE_CATEGORIES_API API RESPONSE............", response)

        if (!response?.data?.success) {
            throw new Error("Could not fetch course categories")
        }

        result = response?.data?.data;
        // toast.success("successfully fetch course categories")

    } catch (error) {
        console.log("COURESE CATEGORY API ERROR....", error);
        toast.error(error.message)
    }
    return result;
}
    // Add course details
export const addCourseDetails = async(data, token)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", CREATE_COURSE_API, data,{
            "Content-Type": "multipart/form-data",
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
    // Edit Course details
export const editCourseDetails =async (data, token)=>{

    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", EDIT_COURSE_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${ token}`
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
    // Create Section
export const createSection = async(data, token)=>{

    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", CREATE_SECTION_API, data,{
            Authorization: `Bearer ${token}`
        })

        console.log("CREATE SECTION API RESPONSE......", response);
        if(!response?.data?.success){
            throw new Error ("Could not create section")
        }
        toast.success("Section created Successfully")
        result = response?.data?.updatedCourse
    }catch(error){
        console.log("CREATE SECTION API ERROR...........", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;

}
    // Update Section
export const updateSection = async(data, token)=>{

    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", UPDATE_SECTION_API, data,{
            Authorization: `Bearer ${token}`
        })
        console.log("UPDATE SECTION API RESPONSE......", response);
        if(!response?.data?.success){
            throw new Error ("Could not update section")
        }
        toast.success("Section Updated Successfully")
        result = response?.data?.data;
    }catch(error){
        console.log("UPDATE SECTION API ERROR...........", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;

}
    // Delete Section
export const deleteSection = async(data, token)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try{
        const response = await apiConnector("POST", DELETE_SECTION_API, data, {
            Authorization: `Bearer ${token}`
        })
        console.log("DELETE SECTION API RESPONSE......", response);
        if(!response?.data?.success){
            throw new Error ("Could not delete section")
        }
        toast.success("Section deleted Successfully")
        result = response?.data?.data;
    }catch (error) {
        console.log("DELETE SECTION API ERROR............", error)
        toast.error(error.message)
      }
      toast.dismiss(toastId)
      return result
}

    // Create SubSection
