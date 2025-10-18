import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    signUpData: null,
    loading: false,
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")): null
}
const authSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setSignUpData(state, value){
            state.signUpData = value.payload
        },
        setLoading(state, value){
            state.loading = value.payload
        },
        setToken(state, value){
            state.token = value.payload
        }
    }
})
export const {setSignUpData, setLoading, setToken} = authSlice.actions;
export default authSlice.reducer;