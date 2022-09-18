
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    return ( 
      <header>
        <nav>
           <NavLink exact to="/"  >Home</NavLink>
           <NavLink exact to="/ContactUs" >Contact Us</NavLink>
           <h1>
            <div>Simple</div>
            <div>Countdown</div>
           </h1>
           <NavLink exact to="/login"  >Sign In</NavLink>
           <NavLink exact to="/register"  >Join Us</NavLink>
        </nav>
      </header>

     );
}
 
export default Navbar;