import { useState } from "react"

export default  function useAuthentication({token}){

    const [authenticatedUser,setAuthenticatedUser] = useState(null);
    if(token){
    setAuthenticatedUser(
        authenticatedUser.id = token['id'],
        authenticatedUser.username = token['username'],
        authenticatedUser.email = token['email'],
    )
    }
    return {
       setAuthenticatedUser,
        authenticatedUser
    }


}

