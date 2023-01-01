import moment from "moment/moment";
import { updateEvent } from "../features/events/eventAction";
import {useDispatch } from 'react-redux';

 const useCheckEvent = (event) =>{
    const date = new Date(event?.event_date)
    const dispatch = useDispatch()
    if(event !== undefined){
       
        const event_date = {
            year : date.getUTCFullYear(),
            month : date.getUTCMonth(), // november
            day: date.getUTCDate(),
            hour:date.getUTCHours(),
            minute:date.getUTCMinutes(),
            second:date.getUTCSeconds()
          }
        let startDate = moment(moment(), "DD.MM.YYYY, hh:mm:ss");
        var endDate = moment(event_date);
        if(endDate > startDate && event.is_active){
            const new_event = event.update({
                is_active:false,
                ...event
            })
            dispatch(updateEvent({new_event}))
        }
    
    }
    
}
export default  useCheckEvent;