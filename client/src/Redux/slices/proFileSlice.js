import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
}

const profileSection = createSlice({
    name:"profile",
    initialState: initialState,
    reducers:{
        setUser(state, value){
            state.user = value.payload;
        }
    }
})
export const {setUser} = profileSection.actions
export default profileSection.reducer;