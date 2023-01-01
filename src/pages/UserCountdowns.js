import React from "react";
import UserCountdown from "../components/UserCountdown";
import { useSelector } from "react-redux";
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
      <section>
         <h2>My Countdowns</h2>
        {content}
      </section>
 
     );
}
 
export default UserCountdowns;