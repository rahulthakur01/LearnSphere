import { apiConnector } from "../apiConnector";
import { endPoints } from "../api";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setLoading } from "../../Redux/slices/authSlice";

const { SENDOTP_API, RESETPASSWORDTOKEN_API, RESETPASSWORD_API, SIGNUP_API } =
  endPoints;

// sendotp
export const sendOtp = (email, navigate) => {
  console.log("ok ok");
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
    console.log("ok okff");

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
//signup
export const signUp = (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  accountType,
  navigate
) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        accountType,
      });

      console.log("SIGN UP RESPONSE...", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("SINGUP SUCCESSFULL");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};
// get password reset token
export const getPasswordResetToken = (email, setEmailSent) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORDTOKEN_API, {
        email,
      });
      console.log("Reset Password Token Response...", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Resent email sent.");
      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  };
};

// reset password
export const resetPassword = (password, confirmPassword, token, navigate) => {
  return async (disptach) => {
    disptach(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      console.log("RESET PASSWORD RESPONSE", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Reset password successfully");
      navigate("/login");
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Unable to reset password");
    }
    disptach(setLoading(false));
  };
};
