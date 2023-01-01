import api from "../api/events"
import UseAuthentication from "../hooks/useAuthentication"
import React from 'react'
const Countdowns = () => {
    console.log("authenticated user is ",UseAuthentication())

    const getCountdowns = async (userId) =>{
        const response = await api.get("/users/",{params:{id:userId}})
        
        if(response.status === 200)
        {
            return response
        }
        return false
    }

    const authenticatedUser = UseAuthentication()
    let userCountdowns = null

    
    console.log("user id is: ",authenticatedUser)

    if(authenticatedUser){
        userCountdowns = getCountdowns(authenticatedUser.id)
        console.log("user countdowns are: =>",userCountdowns)

    }
    else{
        console.log("user countdowns are null")
    }
   

    
    return (
        <div>My Countdowns</div>

      );
}
 
export default Countdowns;