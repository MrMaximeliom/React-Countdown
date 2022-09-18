import { Link } from "react-router-dom";
const CreateCountdown = () => {
    return ( 
        <div>
        <div className="home-container">
        <h2>Share Your Amazing Events With Your Friends!</h2>
        <div className="form-container">
        <form action="" method="POST" autoComplete="off">
            <ul className="flex-outer">
                <li>
                    <label htmlFor="name">Event Name</label>
                    <input type="text" name="name" id="name" placeholder="Event Name"/>
                </li>
               
                <li>
                    <label htmlFor="start_date">Start Date</label>
                    <input type="date" name="start_name" placeholder="Start Date" id="start_email"/>
                </li>
                <li>
                    <label htmlFor="end_date">End Date</label>
                    <input type="date" name="end_date" placeholder="End Date" id="end_date"/>
                </li>
                <li>
                    <label htmlFor="notes">Notes</label>
                    <textarea cols="30" rows="5" name="notes" placeholder="Notes" id="notes"/>
                </li>
                <li className="auth-button">
                    
                    <Link  className="btn btn-primary" to="/">Start</Link>
                </li>
            </ul>
        </form>

        </div>

    </div>
        
    </div>
 
     );
}
 
export default CreateCountdown;