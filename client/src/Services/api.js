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
// Contact us EndPoints
export const contactUsEndpoints = {
    CONTACT_US_API : BASE_URL + '/reach/contact'
}
export const profileEndpoints = {
    GET_USER_ENROLLED_COURSES_API: BASE_URL + '/profile/getEnrolledCourses'
}
// Setting Endpoints
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + '/profile/updateDisplayPicture',
    UPDATE_PROFILE_API: BASE_URL + '/profile/updateProfile',
    CHANGE_PASSWORD_API: BASE_URL + '/auth/changepassword',
    DELETE_PROFILE_API: BASE_URL + '/profile/deleteProfile'
}
export const courseDetailsEndpoints = {
    CREATE_COURSE_API: BASE_URL + '/course/createCourse',
    EDIT_COURSE_API: BASE_URL + '/course/editCourse',
    DELETE_COURSE_API: BASE_URL + '/course/deleteCourse',
    
    COURSE_CATEGORY_API: BASE_URL + '/course/showAllCategories',
    CREATE_SECTION_API : BASE_URL + '/course/addSection',
    UPDATE_SECTION_API: BASE_URL + '/course/updateSection',
    DELETE_SECTION_API: BASE_URL + '/course/deleteSection',
    CREATE_SUBSECTION_API: BASE_URL + '/course/addSubSection',
    UPDATE_SUBSECTION_API: BASE_URL + '/course/updateSubSection',
    DELETE_SUBSECTION_API: BASE_URL + '/course/deleteSubSection',
    GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + '/course/getInstructorCourses'
}
