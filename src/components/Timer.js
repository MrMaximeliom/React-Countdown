const Timer = () => {
    return (
      <div className="countdownParent">
       <h3>Ramadan Countdown</h3>
      <table className="countdownContainer">
      
        <tbody>
          
          <tr className="info">
              <th id="days">120</th>
              <th>:</th>
              <th id="hours">4</th>
              <th>:</th>
              <th id="minutes">12</th>
              <th>:</th>
              <th id="seconds">22</th>
          </tr>
          <tr className="info">
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