import { useState } from "react";
import React from 'react'
import { createEvent } from "../features/events/eventAction";
import { useDispatch } from 'react-redux'
import Notifications from "../components/Notifications"

const CreateCountdown = () => {
    const [eventName,setEventName] = useState('');
    const [eventDate,setEventDate] = useState('');
    const [eventHour,setEventHour] = useState('');
    const [eventMinute,setEventMinute] = useState('');
    const [eventSecond,setEventSecond] = useState('');
    const [eventNameError,setEventNameError] = useState('')
    const [eventDateError,setEventDateError] = useState('')
    const [eventHourError,setEventHourError] = useState('')
    const [eventMinuteError,setEventMinuteError] = useState('')
    const [eventSecondError,setEventSecondError] = useState('')
    const [note,setNote] = useState('');
    const [noteError,setNoteError] = useState('');
    const dispatch = useDispatch()
    let stringOnlyRegex = /^[a-zA-Z\s]*$/g
    let hoursRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-4])$/g
    let minutesAndSecondsRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])$/g
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("pushed")
        const event = {
            name: eventName,
            event_date:eventDate,
            event_hour:eventHour,
            event_minute:eventMinute,
            event_second:eventSecond,
            is_active:true,
            UserId:localStorage.getItem('userId')

        }
        try{
            Notifications("success","Success",`Event ${eventName} created successfully!`)

        }
        catch(e){
            Notifications("error",`Failed to create ${eventName} event ... please try again later!`,"Failed to create event!")

        }
        dispatch(createEvent({event}))
    }
    
    return ( 
        <div>
        <div className="home-container">
        <h2>Share Your Amazing Events With Your Friends!</h2>
        <div className="form-container">
        <form  autoComplete="off" onSubmit={handleSubmit}>
            <ul className="flex-outer" id="create-countdown-container">
                <li>
                    <label htmlFor="name">Event Name</label>
                    <input type="text" name="name" id="name" placeholder="Event Name" 
                    
                    required 
                    value={eventName}
                    onChange={(e)=>{
                       setEventName(e.target.value)
                       if(!stringOnlyRegex.test(e.target.value)){
                        setEventNameError("name consists only with characters and whitespaces!")
            
                    }
                    else{
                        setEventNameError("")
                    }
                    }}
                    
                    
                    />
                    
                </li>
                <li className="error-data"><p id="name-error">{eventNameError}</p></li>
  
                <li>
                    <label htmlFor="event_date">Event Date</label>
                    <input type="date" name="event_date"
                     placeholder="Event Date"
                      id="event_date" 
                      required
                      value={eventDate}
                      onChange={(e)=>{
                        setEventDate(e.target.value)
                      }}
                      />
                   
                </li>
                <li className="error-data"> <p id="event-date-error">{eventDateError}</p></li>
                <div className="time-container">
                <div>
                <li>
                <label htmlFor="event_hour">Hours</label>
                    <input type="number" min="0" max="24" 
                    name="event_hour"
                     value={eventHour}
                     required
                     onChange={(e)=>{
                        setEventHour(e.target.value);
                        if(!hoursRegex.test(e.target.value)){
                            setEventHourError("hours must contain only numbers in range of 1 to 24 !!");
                
                        }
                        else{
                            setEventHourError("")
                        }
                     }
                    
                    
                    }
                     />

                </li>
              
                <li ><p id="event-hour-error" className="time-error">{eventHourError}</p></li>

                </div>
                <div>
               <li>
               

               
                 
               <label htmlFor="event_minute">Minutes</label>
                                  <input type="number" min="0" max="59" name="event_minute" 
                                  value={eventMinute}
                                  required
                                  onChange={(e)=>{
                                    setEventMinute(e.target.value)
                                        if(!minutesAndSecondsRegex.test(e.target.value)){
                                      setEventMinuteError("minutes must contain only numbers in range of 1 to 60 !!")
                   
                                       }
                                       else{
                                      setEventMinuteError("")
                                      }
    
                                  }}
                                  />

               </li>
               <li><p id="event-minute-error" className="time-error">{eventMinuteError}</p></li>
               </div>
               <div>

              
               <li>
               <label htmlFor="event_second">Seconds</label>
                    <input type="number" min="0" max="59" name="event_second" value={eventSecond} required="required"
                    onChange={(e)=>{
                        setEventSecond(e.target.value)
                       
                                        if(!minutesAndSecondsRegex.test(e.target.value)){
                                      setEventSecondError("seconds must contain only numbers in range of 1 to 60 !!")
                   
                                       }
                                       else{
                                      setEventSecondError("")
                                      }
                    }}
                    />

               </li>
               <li><p id="event-second-error" className="time-error">{eventSecondError}</p></li>
               </div>
            
                </div>
               
                
                <li>
                    <label htmlFor="notes">Notes</label>
                    <textarea cols="30" rows="5" name="notes" placeholder="Notes" id="notes"
                     value={note}
                     onChange={(e)=>{
                        setNote(e.target.value)
                        if(!stringOnlyRegex.test(note)){
                            setNoteError("notes consists only with characters and whitespaces!")
                
                        }
                        else{
                            setNoteError("")
                        }
                     }}
                     
                     
                     />
                </li>
                <li className="error-data"><p id="note-error">{noteError}</p></li>

                <li className="auth-button">
                    
                    <input type="submit" value="Start" className="btn btn-primary"/>
                  
                </li>
            </ul>
        </form>

        </div>

    </div>
        
    </div>
 
     );
}
 
export default CreateCountdown;