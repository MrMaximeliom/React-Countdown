import React from "react";
import UserCountdown from "../components/UserCountdown";
import { useSelector } from "react-redux";
import styles from '../styles/countdowns.module.css'
const UserCountdowns = () => {
    const { eventInfo } = useSelector((state) => state.event)
    let content
    if(eventInfo !== null && eventInfo !== undefined)
    {
    content = eventInfo.map(event => 
        <UserCountdown key={event.id} countdown={event}  />    
     
        )
    }
    else {
        content = <div>
            <p>This user has no countdowns yet!!</p>
        </div>
    }
    return ( 
      <section className={styles.cardsContainerSection}>
         {/* <h2>My Countdowns</h2> */}
        {content}
      </section>
 
     );
}
 
export default UserCountdowns;