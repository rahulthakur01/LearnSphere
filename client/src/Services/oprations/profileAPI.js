import {toast} from "react-hot-toast"
import {apiConnector} from "../apiConnector"
import {profileEndpoints} from "../api"


export const getUserEnrolledCourses = async (token)=>{

    const toastId = toast.loading("Lodaing...")
    let result = [];

    try{
        const respose = await apiConnector("GET",)
    }catch(error){
        console.log("GET_USER_ENROLLED_COURSES_API ERROR...", error)
    }

}