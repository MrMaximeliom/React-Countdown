
import { NavLink } from 'react-router-dom';

const Navbar = ({token}) => {
  // const {token,setToken} = useState(token)


    return ( 
      <header>
        <nav>
           <NavLink exact to="/"  >Home</NavLink>
           <NavLink exact to="/ContactUs" >Contact Us</NavLink>
           <h1>
            <div>Simple</div>
            <div>Countdown</div>
           </h1>
           {token ? <NavLink exact to="/logout"  >Logout</NavLink> :   <NavLink exact to="/login"  >Login</NavLink> }
           {token ? "" :   <NavLink exact to="/register"  >Sign Up</NavLink> }
        
        </nav>
      </header>

     );
}
 
export default Navbar;