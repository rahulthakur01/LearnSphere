import { settingsEndpoints } from "../api";
import {apiConnector} from "../apiConnector";
import toast from "react-hot-toast";
const{ UPDATE_DISPLAY_PICTURE_API} = settingsEndpoints

export const updateDisplayPicture = (token, formData)=>{
    const toastid = toast.loading("Loading....");
    return async(dispatch)=>{
        try{
            const response = await apiConnector("PUT", UPDATE_DISPLAY_PICTURE_API, formData,{
                "Content-Type":"multipart/form-data",
                Authrization: `Bearer ${token}`
            } );

            console.log(" UPDATE_DISPLAY_PICTURE_API RESPONSE..", response);
            if(!response.data.success){
                throw new Error(response.data.success)
            }
            toast.success("Display picture updated successsfully")
        }catch(error){
            console.log("ERROR...", error);
            toast.error("Could Not Update Display Picture")
        }   
    }
    toast.dismiss(toastid)
}