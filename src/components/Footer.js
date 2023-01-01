import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
    return ( 
        <footer>
        <div>
            <li><h4>Support Corner</h4></li>
            <li><Link to="">Contact Us</Link></li>
            <li><Link to="">Reach Us</Link></li>
        </div>
        <div> <p>Copyright @2022 Moayed</p></div>
        <div>
            <li><h4>Follow Me</h4></li>
            <li><Link to="">Twitter</Link></li>
            <li><Link to="">Facebook</Link></li>
        </div>
       
    </footer>
     );
}
 
export default Footer;