import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../api";

const { GET_USER_ENROLLED_COURSES_API } = profileEndpoints;

export const getUserEnrolledCourses = async (token) => {
  const toastId = toast.loading("Lodaing...");
  let result = [];

  try {
    const response = await apiConnector("GET", GET_USER_ENROLLED_COURSES_API, {
      Authorization: ` Bearer ${token}`,
    });
    console.log("GET_USER_ENROLLED_COURSES_API RESPONSE...", response);

    if (!response.data.message) {
      throw new Error(response.data.message);
    }
    result = response.data.data;
    toast.success("All courses fetched")
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API ERROR...", error);
    toast.error("Could not found any courses")
  }
  toast.dismiss(toastId);
};
