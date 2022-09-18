import { Link } from "react-router-dom";
const Login = () => {
    return ( 
        <div>
            <div className="home-container">
            <h2>Welcome Back We Missed You!</h2>
            <div className="form-container">
            <form action="" method="POST" autoComplete="off">
                <ul className="flex-outer">
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </li>
                   
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" id="password"/>
                    </li>
                    <li className="pre-auth"> 
                    <p>No account? </p>
                        <Link to="/register" className="btn btn-secondary">Sign Up</Link>
                        
                        </li>
                    <li className="auth-button">
                        
                        <Link  className="btn btn-primary" to="/">Sign In</Link>
                    </li>
                </ul>
            </form>

            </div>

        </div>
            
        </div>
     );
}
 
export default Login;