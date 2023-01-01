import { Link } from "react-router-dom";
import React from 'react'

const NotFound = () => {
    return (  
        <div>
        <h3>Sorry Not Found</h3>
           <Link to="/">Home</Link>
        </div>

    );
}
 
export default NotFound;
