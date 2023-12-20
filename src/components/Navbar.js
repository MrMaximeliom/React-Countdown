
import { NavLink } from 'react-router-dom';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getUserEvents } from "../features/events/eventAction";
import pic from "../images/pic.jpg"
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
           <NavLink exact to="/React-Countdown">Home</NavLink>
           <NavLink exact to="/ContactUs" >Contact Us</NavLink>
           <h1>
            <div>Simple</div>
            <div>Countdown</div>
           </h1> 
           {token && userInfo  ? 
           <div className="dropdown">
            <span>Countdowns</span>
           <ul className='dropdown-content'>
           <li><NavLink exact to="/myCountdowns" onClick={handleGetCountdowns}>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-watch"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
            My Countdowns</NavLink></li>
            <li><NavLink exact to="/createCountdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Create new Countdown</NavLink></li>
           </ul>
         </div>
           :  
            <NavLink exact to="/register">Sign Up</NavLink> }
           {token && userInfo ? 
            <div className="dropdown">
            <img src='assets/images/1.jpg' className="avatar"></img> 
          <ul className='dropdown-content'>    
            <li><NavLink exact to="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Profile
            </NavLink></li> 
            <li><NavLink exact to="/logout">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              Logout</NavLink></li> 
           </ul>
           </div>
           :  
           <NavLink exact to="/login"  >Login</NavLink> }

        
        </nav>
      </header>

     );
}
 
export default Navbar;