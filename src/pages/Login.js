import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom';


async function loginUser(credentials)
{
    return fetch('http://localhost:4000/api/auth/login ',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())

}

const Login = ({setToken}) => {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            email,
            password
        })
        console.log("token is")
        console.log(token)
        setToken(token)
        history.push('/');
        
    }
    return ( 
        <div>
            <div className="home-container">
            <h2>Welcome Back We Missed You!</h2>
            <div className="form-container">
            <form action=""
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
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
 
export default Login;