import { setUser } from "../../Redux/slices/proFileSlice";
import { settingsEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";
const { UPDATE_DISPLAY_PICTURE_API, UPDATE_PROFILE_API, CHANGE_PASSWORD_API } =
  settingsEndpoints;

export const updateDisplayPicture = (token, formData) => {
  console.log("TOKEN.........", token);

  return async (dispatch) => {
    const toastid = toast.loading("Loading....");

    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        null,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      console.log(" UPDATE_DISPLAY_PICTURE_API RESPONSE..", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Display picture updated successsfully");
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log("ERROR...", error);
      toast.error("Could Not Update Display Picture");
    }
    toast.dismiss(toastid);
  };
};

export const updateProfile = (token, formData) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      });

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      const userImg = response.data.updateUserDetails.image
        ? response.data.updateUserDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`;
      dispatch(setUser({ ...response.data.updateUserDetails, image: userImg }));
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("ERROR....", error);
      toast.error("Could not update profile");
    }
    toast.dismiss(toastId);
  };
};

export const changePassword = (token, formData) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector(
        "POST",
        CHANGE_PASSWORD_API,
        formData,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log("ERROR WHILE CHANGING PASSWORD...", error);
      toast.error("Can not be updated password");
    }
    toast.dismiss(toastId)
  };
};
