import { createSlice} from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./userAction";
// initialize user token from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null

const initialState = {
    loading: true,
    userInfo:null, // for user object
    userToken, // for storing the JWT
    error:false,// for monitoring the registration process
}

const userSlice = createSlice({
    
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
          
        }
    },
    extraReducers(builder){
        builder
        .addCase(registerUser.pending, (state,action)=>{
            state.loading = true
            state.error = null
         
        })
        .addCase(registerUser.fulfilled, (state,{payload})=>{
           
            state.loading = false
            state.error = false
            state.userInfo = payload
            state.userToken = payload.accessToken
        })
        .addCase(registerUser.rejected, (state,action)=>{
            state.loading = false
            state.error = true
        })
        // logging user
        builder
        .addCase(userLogin.pending, (state,action)=>{
            state.loading = true
            state.error = false
        
        })
        .addCase(userLogin.fulfilled,(state,action)=>{
            state.loading = false
            state.userInfo = action.payload
            state.userToken = action.payload
            state.error = false
        })
        .addCase(userLogin.rejected,(state,action)=>{
            state.loading = false
            state.error = true
           
        })

    }
})

export const {logout} = userSlice.actions

export default userSlice.reducer