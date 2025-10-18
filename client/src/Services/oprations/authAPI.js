import { apiConnector } from "../apiConnector";
import { endPoints } from "../api";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setLoading } from "../../Redux/slices/authSlice";

const { SENDOTP_API } = endPoints;

export const sendOtp = (email, navigate) => {

  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);
      console.log(response.data.success);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("OTP sent successfully");
      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};
