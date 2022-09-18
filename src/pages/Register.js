import { Link } from "react-router-dom";

const Register = () => {
    return (  
        <div className="home-container">
            <h2>Welcome to Simple Countdown</h2>

            <h3>We are thrilled to have you with us!</h3>

            <div className="form-container">
            <form action="" method="POST" autoComplete="off">
                <ul className="flex-outer">
                    <li>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id="first_name" name="first_name" placeholder="First Name"/>
                    </li>
                    <li>
                        <label htmlFor="last_name">Last Name</label>
                        <input id="last_name" placeholder="Last Name" name="last_name"/>
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </li>
                    <li>
                        <span>Gender</span>
                    <div className="gender-container">
                        <input name="gender" className="checkmark" id="male" type="radio" />
                        <label htmlFor="male">Male</label>
                        <input name="gender" className="checkmark" id="female" type="radio" />
                        <label htmlFor="female">Female</label>
                    </div>
                    </li>
                    <li>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" id="username"/>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" id="password"/>
                    </li>
                    <li>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="text" name="confirm_password" placeholder="Confirm Password" id="confirm_password"/>
                    </li>
                    <li>
               
                        <input type="checkbox" name="accept_terms" id="accept_terms" />
                        <label htmlFor="accept_terms">I accept Terms and Conditions</label>

                    </li>
                    <li className="pre-auth"> 
                    <p>Have an account? </p>
                        <Link to="/login" className="btn btn-secondary">Sign In</Link>
                        
                        </li>
                    <li className="auth-button">
                        <Link to="/" className="btn btn-primary" >Sign Up</Link>
                    </li>
                </ul>
            </form>

            </div>

        </div>
    );
}
 
export default Register;