import { apiConnector } from "../apiConnector";
import { endPoints } from "../api";
import toast from "react-hot-toast";
import { setLoading, setToken } from "../../Redux/slices/authSlice";
import {setUser} from "../../Redux/slices/proFileSlice";

const {
  SENDOTP_API,
  RESETPASSWORDTOKEN_API,
  RESETPASSWORD_API,
  SIGNUP_API,
  LOGIN_API,
} = endPoints;

// sendotp
export const sendOtp = (email, navigate) => {
 
  return async (dispatch) => {
    const toastId = toast.loading("loading...");
    dispatch(setLoading(true));
   

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
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
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

// login
export const login = (email, password, navigate) => {
  return async (dispatch) => {
    const toastId = toast.loading("Loding...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log("LOGIN RESPONSE...", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login successful");
      dispatch(setToken(response.data.token));
      const userImg = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
      dispatch(setUser({ ...response.data.user, image: userImg }));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/dashboard/my-profile");
    } catch (error) {
      console.log("Login api error........", error);
      toast.error("Login Failed");
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

// Log out
export const logout = (navigate)=>{
  return (dispatch)=>{
   dispatch( setUser(null));
   dispatch(setToken(null));
   localStorage.removeItem("token");
   localStorage.removeItem("user");
   toast.success("logged out")
   navigate("/")
  }
}