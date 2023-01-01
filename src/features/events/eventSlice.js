import { createSlice} from "@reduxjs/toolkit";
import { getUserEvents } from "./eventAction";

const initialState = {
    loading: true,
    eventInfo:null, // for event object
    error:false,// for monitoring the registration process
}

const eventSlice = createSlice({
    
    name: 'event',
    initialState,
    reducers: {
    },
    extraReducers(builder){
        builder
        .addCase(getUserEvents.pending, (state,action)=>{
            state.loading = true
            state.error = false
         
        })
        .addCase(getUserEvents.fulfilled, (state,{payload})=>{
           
            state.loading = false
            state.error = false
            state.eventInfo = payload
            
        })
        .addCase(getUserEvents.rejected, (state,action)=>{
            state.loading = false
            state.error = true
            state.eventInfo = null
        })

    }
   
})


export default eventSlice.reducer