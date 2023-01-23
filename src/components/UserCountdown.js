import React from "react";
import styles from '../styles/countdowns.module.css'
import { Link } from 'react-router-dom'
import Timer from "./Timer";


const UserCountdown = ({countdown}) => {
    const date = new Date(countdown.event_date)
    const event_date = {
        year : date.getUTCFullYear(),
        month : date.getUTCMonth(), // november
        day: date.getUTCDate(),
        hour:date.getUTCHours(),
        minute:date.getUTCMinutes(),
        second:date.getUTCSeconds()
      }


  
    return ( 
        
      <section>
        <div className={styles.card}>
           <div className={styles.countdownTitle}>
            <span>{countdown.name}</span>
            
            </div> 
            <div className={styles.countdownDate}>
                <span>{countdown.is_active? "Active": "Not Active"}</span>
            </div>
            <Timer event_date={event_date} notes={""}  event={countdown} styles={styles} title={false}/> 
            
           <div className={styles.countdownButton}>
            <Link to="#" className="btn btn-primary">View</Link>
           </div>
           
        </div>
      </section>
 
     );
}
 
export default UserCountdown;