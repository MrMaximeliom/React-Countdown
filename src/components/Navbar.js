
import { NavLink } from 'react-router-dom';
import React, { useContext,useEffect } from 'react'
import AuthContext from '../context/AuthProvider';
import { useSelector,useDispatch } from 'react-redux';
import { getUserEvents } from "../features/events/eventAction";

const Navbar = () => {
   const token = localStorage.getItem('userToken')
   const { userInfo } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const handleGetCountdowns =  () =>{
     dispatch(getUserEvents())
    //  const { eventInfo } = useSelector((state) => state.event)

   }

  
    return ( 
      <header>
        <nav>
           <NavLink exact to="/">Home</NavLink>
           <NavLink exact to="/ContactUs" >Contact Us</NavLink>
           <h1>
            <div>Simple</div>
            <div>Countdown</div>
           </h1> 
           {token && userInfo  ? 
           <div className="dropdown">
            <span>Countdowns</span>
           <ul className='dropdown-content'>
           <li><NavLink exact to="/myCountdowns" onClick={handleGetCountdowns}>My Countdowns</NavLink></li>
            <li><NavLink exact to="/">Create new Countdown</NavLink></li>
           </ul>
         </div>
          //  <NavLink exact to="/createCountdown"  >New Countdown</NavLink> 
           :  
            <NavLink exact to="/register"  >Sign Up</NavLink> }
           {token && userInfo ? <NavLink exact to="/logout"  >Logout</NavLink> :   <NavLink exact to="/login"  >Login</NavLink> }

        
        </nav>
      </header>

     );
}
 
export default Navbar;