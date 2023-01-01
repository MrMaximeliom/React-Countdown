import Timer from "../components/Timer";
import React from 'react'
import moment from "moment/moment";



const Home = () => {
    let futureDate = moment().add(10,'days')
    const event_date = {
        year : futureDate.year(),
        month : futureDate.month(), // november
        day: futureDate.date(),
        hour:futureDate.hour(),
        minute:futureDate.minute(),
        second:futureDate.second()
      }
    const notes = ""


    return (  

        <div className="home-container">
            <h2>Welcome to Simple Countdown</h2>
            <div className="center-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                elit. Earum aliquam officia incidunt voluptatibus 
                laboriosam corrupti deserunt, debitis natus qui quis
                 aut amet soluta ab voluptate harum obcaecati! Delectus 
                 vero cumque doloremque recusandae quisquam impedit aperiam excepturi,
                  aliquam fugit eius beatae amet quam deserunt, repellendus 
                autem iusto reiciendis quasi dolorum dolore!</p>
            </div>
           
       
       <Timer 
       event_date={event_date}
       notes={notes}
       />
    
        <div className="start-text">
            <h3>About Up Coming Event</h3>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Ipsum officia, natus
                dicta laboriosam veritatis doloribus accusantium adipisci praesentium,
                 ad autem iure tempore veniam ratione quod illo enim illum. Dolore nobis, 
                 autem officiis delectus placeat quasi nemo modi laboriosam repellendus assumenda.</p>
        </div>
        </div>
                
    );
    
}

export default Home;