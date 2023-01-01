import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Notifications = (type,title,message,duration=3000,callBack) => {
   
      switch (type) {
        case 'info':
          NotificationManager.info(message,title,duration);
          break;
        case 'success':
          NotificationManager.success(message,title,duration);
          break;
        case 'warning':
          NotificationManager.warning(message, title, duration);
          break;
        case 'error':
          NotificationManager.error(message,title, duration,callBack);
          break;
      }

      return ( 
  
       
          <div>
            <NotificationContainer/>
          </div>
      )
      
    }
  

  

export default Notifications;
