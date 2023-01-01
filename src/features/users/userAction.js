import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../api/auth'




// handle user login
export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email,password },{ rejectWithValue }) => {
        try{
            console.log("first")
            // configure header's Content-Type as JSON
            const config = {
                headers:{
                    'Content-Type' : 'application/json',
                },

            }
            const { data } = await axios.post(
                '/login/', 
                {email, password},
                config
            )
            // store user's token in local storage
            localStorage.setItem('userToken',data.accessToken)
            localStorage.setItem('userId',data.id)
            return data
            
        }
        catch(error){
            console.log("second")

            // return custom error message from API if any
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message)
            }


        }

    }

)

// handle register user 
export const registerUser = createAsyncThunk(
    // action type string
    'user/register',
    // callback function
    async (
        {firstName,lastName,username,email,password},
        {rejectWithValue}) =>{ 
            try{
                // configure header's Content-Type as JSON
                const config = {
                    headers:{
                        'Content-Type':'application/json',
                    },
                }
                // make request to backend
                const {data} = await axios.post(
                    '/register',
                    {firstName,lastName,username,password,email},
                    config
                )
                localStorage.setItem('userToken',data.accessToken)
              

                return data

            }
            catch(error){
                // return custom error message from API if any
                if(error.response && error.response.data.message){
                    return rejectWithValue(error.response.data.message)
                }
                else {
                    return rejectWithValue(error.message)
                }

            }
        }
)