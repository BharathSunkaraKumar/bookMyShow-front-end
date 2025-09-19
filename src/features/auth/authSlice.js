import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("BookMyShowUSer"))
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? user : null,
        token: user ? user.token : null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("BookMyShowUSer", JSON.stringify(action.payload))
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("BookMyShowUSer")
        }
    }
})

export const {loginSuccess, logOut} = authSlice.actions;
export default authSlice.reducer;