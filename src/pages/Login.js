import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import React from 'react'
import Notifications from "../components/Notifications"
import { userLogin } from '../features/users/userAction'
import { useDispatch,useSelector } from 'react-redux'



const Login = () => {
    const history = useHistory();
    let {  error, userInfo } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
     // define auth context
     // if user already logged in redirect him/her to home page
     useEffect(()=>{
       
        if(userInfo){
            // localStorage.setItem('user', userInfo)
            history.push('/')
            Notifications("success","Success","Welcome Back")

        }
       if(error){
        Notifications("error","Failed to login","Invalid Credentials")

       }
    
     },[history,userInfo,error])
  
  
    const handleSubmit = async e => {

        e.preventDefault()

        dispatch(userLogin({email,password}))
        
          
  
        

            
        
    }
    

    return ( 
        <div>
            <div className="home-container">
            <h2>Welcome Back We Missed You!</h2>
            <div className="form-container">
            <form 
             method="POST" 
             autoComplete="off"
             onSubmit={handleSubmit}
             >
                <ul className="flex-outer">
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        name="email"
                         value={email} 
                         id="email"
                          onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                    </li>
                   
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                        name="password" 
                        placeholder="password" 
                         id="password"
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                         />
                    </li>
                    <li className="pre-auth"> 
                    <p>No account? </p>
                        <Link to="/register" className="btn btn-secondary">Sign Up</Link>
                        
                        </li>
                    <li className="auth-button">
                        
                        <button  className="btn btn-primary" type="submit" >Sign In</button>
                    </li>
                </ul>
            </form>

            </div>

        </div>
            
        </div>
     );
}

export default Login;