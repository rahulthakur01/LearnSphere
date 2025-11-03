const BASE_URL = import.meta.env.VITE_BASE_URL

console.log("BASE_URL =", BASE_URL);
// Auth Endpoints
export const endPoints = {
    SENDOTP_API: BASE_URL + '/auth/sendotp',
    SIGNUP_API: BASE_URL + '/auth/signup',
    LOGIN_API: BASE_URL + '/auth/login',
    RESETPASSWORDTOKEN_API: BASE_URL + '/auth/reset-password-token',
    RESETPASSWORD_API: BASE_URL + '/auth/reset-password'
}