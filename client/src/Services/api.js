const BASE_URL = import.meta.env.VITE_BASE_URL

console.log("BASE_URL =", BASE_URL);
// Auth Endpoints
export const endPoints = {
    SENDOTP_API: BASE_URL + '/auth/sendotp'
}