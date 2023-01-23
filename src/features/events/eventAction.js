import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../api/events'


export const getUserEvents = createAsyncThunk(
    'event/getUserEvents',
    async (_,{ rejectWithValue }) => {
        try{    
            // configure header's Content-Type as JSON
            const config = {
                headers:{
                    'Content-Type' : 'application/json',
                },

            }
           
            const userId = localStorage.getItem('userId')
           
            const { data } = await axios.get(
                `users/${userId}/`, 
                config
            )
           return data
        
        }
        catch(error){
            // return custom error message from API if any
            if(error.response && error.response.data.message){
                // console.log(error.response.data.message)
                return rejectWithValue(error.response.data.message)
            }
            else {
                // console.log(error.message)
                return rejectWithValue(error.message)
            }


        }

    }

)
export const createEvent = createAsyncThunk(
    'event/createEvent',
    async ({event:new_event},{ rejectWithValue }) => {
        try{    
            // configure header's Content-Type as JSON
            const config = {
                headers:{
                    'Content-Type' : 'application/json',
                },

            }           
            const { data } = await axios.post(
                `/`, 
                {...new_event},
                config
            )
           return data
        
        }
        catch(error){
            // return custom error message from API if any
            if(error.response && error.response.data.message){
                // console.log(error.response.data.message)
                return rejectWithValue(error.response.data.message)
            }
            else {
                // console.log(error.message)
                return rejectWithValue(error.message)
            }


        }

    }

)
export const updateEvent = createAsyncThunk(
    'event/updateEvent',
    async ({event:new_event},{ rejectWithValue }) => {
        try{    
            // configure header's Content-Type as JSON
            const config = {
                headers:{
                    'Content-Type' : 'application/json',
                },

            }           
            const { data } = await axios.patch(
                `${new_event?.id}/`, 
                {...new_event},
                config
            )
           return data
        
        }
        catch(error){
            // return custom error message from API if any
            if(error.response && error.response.data.message){
                // console.log(error.response.data.message)
                return rejectWithValue(error.response.data.message)
            }
            else {
                // console.log(error.message)
                return rejectWithValue(error.message)
            }


        }

    }

)
