import { apiConnector } from "../apiConnector";
import {courseDetailsEndpoints} from "../api"
const {CREATE_COURSE_API, EDIT_COURSE_API } = courseDetailsEndpoints
import toast from "react-hot-toast";

export const addCourseDetails = ()=>{



}

export const editCourseDetails =async (data, token)=>{

    let result = null;
    const toastId = toast.loading("Loading...");
    try{

        const response = await apiConnector("POST", EDIT_COURSE_API, data, {
            Authrization: `Bearer ${ token}`
        })

    }catch(error){
        console.log("EDIT COURSE API ERROR...........", error);
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;

}