import { useHistory } from "react-router-dom";
const Logout = () => {
    const history = useHistory()
    localStorage.removeItem('token')
    history.push('/')
    return ( 
""
     );
}
 
export default Logout;