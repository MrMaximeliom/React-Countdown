import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.user)

   
    // useToken().clearToken()
   useEffect(()=>{
    if(userInfo != null)
    dispatch(logout())
    history.push('/')

   },[dispatch])
}
 
export default Logout;

