import React , { useContext,useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import api from "../api/auth"
import validator from "../validators/validateForms"
import Notifications from "../components/Notifications"

import {useHistory} from 'react-router-dom';
import AuthContext from "../context/AuthProvider";
import { useSelector,useDispatch } from 'react-redux';
import { registerUser } from '../features/users/userAction';


const Register = () => {
    const { loading,userInfo,error } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    // states of form fields
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [gender,setGender] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [isRulesAccepted,setIsRulesAccepted] = useState(false)

    // states of errors in form fields
    const[firstNameError,setFirstNameError] = useState('')
    const[lastNameError,setLastNameError] = useState('')
    const[emailError,setEmailError] = useState('')
    const[usernameError,setUsernameError] = useState('')
    const[genderError,setGenderError] = useState('')
    const[passwordError,setPasswordError] = useState('')
    const[confirmPasswordError,setConfirmPasswordError] = useState('')
    const[isRulesAcceptedError,setIsRulesAcceptedError] = useState('')
    const[isDataValid,setIsDataValid] = useState(true)
    const { setAuth } = useContext(AuthContext) 
    const history = useHistory();

    useEffect(()=>{
        if(userInfo){
            history.push('/')
            Notifications("success","Success",`Welcome  ${userInfo.username}`)

        }
       if(error){
        Notifications("error","Failed to login","Invalid Credentials")

       }
    
     },[history,userInfo,error])
  


    
    const handleSubmit =  async e =>{
        e.preventDefault()
        if(isDataValid){
            // new user data
            const newUser = {
                firstName:firstName,
                lastName:lastName,
                email:email,
                password:password,
                username:username
            }
            try{
                dispatch(registerUser({firstName,lastName,email,password,username}))
                  // create new user with this data
            // const response = await api.post('/register',newUser)
            // if (response.status === 200)
            // {
            //     console.log(response)
             
            //     // setting the token
            //     setAuth({email,username,accessToken:response['data']['accessToken']})
            //     // redirect to home page
               
            //     history.push("/")


            // }

            }
            catch(error){
                console.log(error)
            }
          

        }
        else{
            console.log("Data is not valid")
        }
        
        }
        
    
    return (  
        <div className="home-container">
            <h2>Welcome to Simple Countdown</h2>

            <h3>We are thrilled to have you with us!</h3>

            <div className="form-container">
            <form action="" 
             method="POST" 
             autoComplete="off"
             onSubmit={handleSubmit}
             >
                <ul className="flex-outer">
                    <li>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text"
                         id="first_name" 
                         name="first_name" 
                         placeholder="First Name"
                         value={firstName}
                         required="required"
                         onChange= {e => {
                            setFirstName(e.target.value)
                            if(!validator.validateTextField(e.target.value))
                            {
                                setFirstNameError('First name contains letteres only')
                                setIsDataValid(false)


                            }
                            else
                            {
                                setFirstNameError('')
                                setIsDataValid(true)


                            }
                            
                           
                        
                        }} 
                         />
                         
                    </li>
                    <li>
                    <p className="error-message">{firstNameError}</p>
                    </li>
                    <li>
                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" 
                        placeholder="Last Name" 
                        name="last_name"
                        required="required"
                        value={lastName}
                        onChange={ e => 
                            {
                                setLastName(e.target.value)
                                if(!validator.validateTextField(e.target.value))
                                {
                                    setLastNameError('Last name contains letters only')
                                    setIsDataValid(false)
                                }
                                else
                                {
                                    setLastNameError('')
                                    setIsDataValid(true)

                                }
                                
                             
                            
                            }}
                        />
                       
                    </li>
                    <li>
                    <p className="error-message">{lastNameError}</p>
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                         name="email" 
                         id="email"
                         placeholder="Email"
                         required="required"
                         value={email}
                         onChange={ async e => {
                            setEmail(e.target.value)
                            
                            
                            if(!validator.validateEmailField(e.target.value))
                            {
                                setEmailError("Email is not valid!")
                                setIsDataValid(false)

                            }
                           
                            else{
                                const isEmailAvilable = await validator.isEmailAvailable(e.target.value)

                                if(!isEmailAvilable)
                                {
                                 setEmailError("There is another user with this email")
                                 setIsDataValid(false)

                                }
                                else{
                                    setEmailError("")
                                    setIsDataValid(true)

                                }

                            }
                        
                        }}
                       
                          />
                         
                    </li>
                    <li> <p className="error-message">{emailError}</p></li>
                    <li>
                        <span>Gender</span>
                    <div className="gender-container">
                        <input name="gender"
                         className="checkmark" 
                         value={gender}
                         id="male" 
                         type="radio"
                         required="required"
                         onChange={ e => {
                            if(e.target.checked)
                            setGender("male")
                            else
                            setGender("female")
                            
                            }}
                         />
                        <label htmlFor="male">Male</label>
                        <input name="gender"
                         className="checkmark"
                         id="female"
                         type="radio" 
                         value={gender}
                         onChange={e => {
                            if(e.target.checked)
                            setGender("female")
                            else
                            setGender("male")
                         }}
                         />
                        <label htmlFor="female">Female</label>
                    </div>
                    </li>
                    <li>
                    <p className="error-message">{genderError}</p>
                    </li>
                    <li>
                        <label htmlFor="username">Username</label>
                        <input type="text"
                         name="username" 
                         placeholder="Username"
                         id="username"
                         value={username}
                         required="required"
                         onChange = {async e => 
                        {
                            setUsername(e.target.value)
                            if(!validator.validateUsernameField(e.target.value))
                            {
                                setUsernameError("username is not valid")
                                setIsDataValid(false)
                            
                            }
                            
                            else {
                                const isUsernameAvailable = await validator.isUsernameAvailable(e.target.value)
                                if(!isUsernameAvailable)
                                {
                                    setUsernameError("Sorry username is taken! try snother one")
                                    setIsDataValid(false)

                                }
                                else{
                                    setUsernameError("")
                                    setIsDataValid(true)
                                }
                            }
                        
                        }
                        
                        }

                         
                         />
                    </li>
                    <li>
                    <p className="error-message"> {usernameError}</p>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                         name="password" 
                         placeholder="Password" 
                         id="password"
                         value={password}
                         required="required"
                         onChange = { e => {
                            console.log("password is changing now")

                            setPassword(e.target.value)
                            if(!validator.validatePasswordField(e.target.value))
                            {
                                setPasswordError("Your password must follow our password policy")
                                setIsDataValid(false)
                            }
                            else{
                                setPasswordError("")
                                setIsDataValid(true)
                            }

                        }}
                         />
                    </li>
                    <li>
                    <p className="error-message">{passwordError}</p>
                    </li>
                    <li>
                    <div className="password-policy">
                       
                       <h4>Password Policy</h4>
                       <p>password must contain 1 number (0-9)</p>
                       <p>password must contain 1 uppercase letters</p>
                       <p>password must contain 1 lowercase letters</p>
                       <p>password must contain 1 non-alpha numeric number</p>
                       <p>password is 8-16 characters with no space</p>
                 
               </div> 
                    </li>
                    
                  
                    <li>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password"
                         name="confirm_password" 
                         placeholder="Confirm Password" 
                         id="confirm_password"
                         required="required"
                         value={confirmPassword}
                         onChange = {e => {
                            setConfirmPassword(e.target.value)
                            if(!validator.validateConfirmPasswordField(password,e.target.value))
                            {
                                setConfirmPasswordError("Passwords does not match!")
                                setIsDataValid(false)
                            }
                            else{
                                setConfirmPasswordError("")
                                setIsDataValid(true)
                            }
                        
                        }}
                         />
                    </li>
                    <li>
                    <p className="error-message">{confirmPasswordError}</p>
                    </li>
                    <li>
               
                        <input type="checkbox" 
                         name="accept_terms" 
                         id="accept_terms"
                         value={isRulesAccepted}
                         required="required"
                         
                         onChange = { e => {
                            let isChecked = e.target.checked
                            if(isChecked){
                            setIsRulesAccepted(true)
                            setIsDataValid(true)
                            setIsRulesAcceptedError('')
                        
                        }
                            else {
                                setIsRulesAccepted(false)
                                setIsRulesAcceptedError(" You have to accespt the rules in order to register")
                            }

                         }}
                         />
                        <label htmlFor="accept_terms">I accept Terms and Conditions</label>

                    </li>
                    <li>
                    <p className="error-message">{isRulesAcceptedError}</p>
                    </li>
                    <li className="pre-auth"> 
                    <p>Have an account? </p>
                        <Link to="/login" className="btn btn-secondary">Sign In</Link>
                        
                        </li>
                    <li className="auth-button">
                        <button  className="btn btn-primary" type="submit" >Sign Up</button>
                    </li>
                </ul>
            </form>

            </div>

        </div>
    );
}
 
export default Register;