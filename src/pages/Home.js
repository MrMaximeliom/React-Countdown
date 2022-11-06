// import Timer from "../components/Timer";
import { useEffect,useState } from "react";
import moment from "moment/moment";
const Home = () => {
    const [daysState,setDaysState] = useState("120")
const [hoursState,setHoursState] = useState("4")
const [minutesState,setMinutesState] = useState("12")
const [secondsState,setSecondsState] = useState("22")
// use Audio constructor to create HTMLAudioElement


//   btn.onclick = e => {
//     // mark our audio element as approved by the user
//     audio.play().then(() => { // pause directly
//       audio.pause();
//       audio.currentTime = 0;
//     });
//     countdown();
//     btn.disabled = true;
//   };





// pause audio sound
const pauseSound = () => {
// audioTune.pause();
const music = document.getElementsByClassName("audio-element")[0];
music.pause();
console.log("pause");
}

// stop audio sound
const stopSound = () => {
const music = document.getElementsByClassName("audio-element")[0];
music.pause();
music.currentTime = 0;
console.log("stop");
}
function playAudio(){
  const music = document.getElementsByClassName("audio-element")[0];
  music.play();
  console.log("playing music")
    // playSound();

}

let futureDate = moment().add(10,"days");

function countdown(){
    
    let startDate = moment(moment(), "DD.MM.YYYY, hh:mm:ss");
    var endDate = moment(futureDate);
    
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
    else{
        console.log("ya moayed it is null ya5")
    }
}


useEffect(() => {
    setInterval(() => {
        countdown();
    }, 1000);
     // eslint-disable-next-line
     }, []);


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
           
       
       {/* <Timer/> */}
        <div className="countdownParent">
        <h3>Ramadan Countdown</h3>
        

        <table className="countdownContainer">
        
            <tbody>
            
            <tr className="info">
                <th id="days">{daysState}</th>
                <th>:</th>
                <th id="hours">{hoursState}</th>
                <th>:</th>
                <th id="minutes">{minutesState}</th>
                <th>:</th>
                <th id="seconds">{secondsState}</th>
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
        <div>
        <button onClick={playAudio}>
        <span>Play Audio</span>
        </button>
        <button onClick={()=>{
        pauseSound()
        }}>
        <span>Pause Audio</span>
        </button>
        <button onClick={()=>{
        stopSound()
        }}>
        <span>Stop Audio</span>
        </button>
    
        <audio className="audio-element">
        <source src="../assets/mp3/music.mp3" ></source>
        </audio>
    
    </div>
    </div>
        <div className="start-text">
            <h3>About Up Coming Event</h3>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Ipsum officia, natus
                dicta laboriosam veritatis doloribus accusantium adipisci praesentium, ad autem iure tempore veniam ratione quod illo enim illum. Dolore nobis, autem officiis delectus placeat quasi nemo modi laboriosam repellendus assumenda.</p>
        </div>
        </div>
                
    );
    
}

export default Home;