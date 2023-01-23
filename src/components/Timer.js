import { useEffect,useState } from "react";
import moment from "moment/moment";
import React from 'react'
import { updateEvent } from "../features/events/eventAction";
import {useDispatch } from 'react-redux';

// const pokemon = require("../assets/mp3/music_pand.mp3");

const Timer = ({event_date,event,styles,title=true}) => {

    const [daysState,setDaysState] = useState("120")
    const [hoursState,setHoursState] = useState("4")
    const [minutesState,setMinutesState] = useState("12")
    const [secondsState,setSecondsState] = useState("22")
    const dispatch = useDispatch()
    // use Audio constructor to create HTMLAudioElement
 


    var date = new Date(event_date.year,
      event_date.month,
      event_date.day,
      event_date.hour,
      event_date.minute,
      event_date.second)
       
   
   
    function countdown(){  
        let startDate = moment(moment(), "DD.MM.YYYY, hh:mm:ss");
        var endDate = moment(date);
        var seconds =  Math.floor(endDate.diff(startDate, 'seconds')%60);
        var days =  endDate.diff(startDate, 'days');
        var hours =  endDate.diff(startDate, 'hours');
        var minutes =  Math.floor(endDate.diff(startDate, 'minutes')%60);
        
        hours = (hours>9) ? hours : '0' + hours;
        minutes = (minutes>9) ? minutes :'0'+ minutes;
        seconds = (seconds>9) ? seconds : '0'+seconds;
        if(minutes === "02"){
            // playSound();
        }
        
        if(document.getElementById("days") != null ){
            setDaysState(days)
            setHoursState(hours)
            setMinutesState(minutes)
            setSecondsState(seconds)
        }
       
        }

   
    useEffect(() => {
     
      let startDate = moment(moment(), "DD.MM.YYYY, hh:mm:ss");
      var endDate = moment(date);
      if(endDate > startDate){
        setInterval(() => {
            countdown();
        }, 1000);

        
      }
      else{
        setDaysState("00")
        setHoursState("00")
        setMinutesState("00")
        setSecondsState("00")
        if(event !== undefined && event.is_active === true)
        {
          
          const new_event = {
            is_active:false,
            id:event.id,
            name:event.name,
            event_date:event.event_date,
            event_hour:event.event_hour,
            event_minute:event.event_minute,
            event_second:event.event_second,
            UserId:event.UserId
           
        }
        dispatch(updateEvent({event:new_event}))
        }
       

      }
         // eslint-disable-next-line
         }, []);
         
         
       
    return (
      <div className={(styles === undefined)? "countdownParent": styles.countdownParentCard}>
       <h3>{title ? event?.name : ""}</h3>
       <h2>Timer until:&nbsp;{moment(date).format('llll')}</h2>
      <table className={(styles === undefined)? "countdownContainer": styles.countdownContainerCard}>
        <tbody>
          <tr className={(styles === undefined)? "info": styles.infoCard}>
              <th id="days">{daysState}</th>
              <th>:</th>
              <th id="hours">{hoursState}</th>
              <th>:</th>
              <th id="minutes">{minutesState}</th>
              <th>:</th>
              <th id="seconds">{secondsState}</th>
          </tr>
          <tr className={(styles === undefined)? "info": styles.infoCard}>
              <td>Days</td>
              <td></td>
              <td>Hours</td>
              <td></td>
              <td>Minutes</td>
              <td></td>
              <td>Seconds</td>
          </tr>
          </tbody>
      </table>
  </div>
      );
}

 
export default Timer;