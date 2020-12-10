import IntervalSelector from "../components/IntervalSelector.js"
import SoundSelector from "../components/SoundSelector.js"
import {useState, useEffect} from 'react';

function MetronomeContainer({sounds}) {

    const[intervalId, setIntervalId] = useState(0);
    const[sound, setSound] = useState();
    const[bpm, setBpm] = useState(40);
    const[isPlaying, setIsPlaying] = useState(false);

    
    useEffect( () => {
        if (!isPlaying) return;
        stop();
        start();
    },[bpm])

    function handleSoundChange(event){
        stop();
        setSound(event.target.value);
    };

    function handleIntervalChange(event){
        setBpm(event.target.value);
    };

    function playSound() {
        const snd = new Audio(sound);  
        snd.play();
        flashText();
    };
    
    function start() {
        setIntervalId(setInterval(playSound, 60000/bpm));
        setIsPlaying(true);
    };
    
    function stop() {
        clearInterval(intervalId);
        setIsPlaying(false);
    };

    function handleStartStop() {
       isPlaying ? stop(): start()
    };
    
    function flashText() {
        var oElem = document.getElementById('bpmColour');
        oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
    };

    return(
        <>
            <p id='bpmColour'>{bpm}bpm</p>
            <IntervalSelector handleIntervalChange={handleIntervalChange}/>
            <br/>
            <SoundSelector sounds={sounds} handleSoundChange={handleSoundChange}/>
            <br/>
            
            <button onClick={handleStartStop}>{isPlaying && sound ? "Stop" : "Start"}</button>
        </>
    );
    
};
export default MetronomeContainer;