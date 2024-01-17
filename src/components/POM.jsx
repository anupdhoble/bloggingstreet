// POM - Page Under Maintainance
import React, { useState,useEffect } from 'react';
import "../styles/pom.css"

export default function POM() {
    const [isPlaying,setIsPlaying]=useState(false);
    
    
    const audiosource ='./audio/Dreamer-AlanWalker-NCS.mp3';
    useEffect(() => {
        const audioElement = document.getElementById('audio-element');
        audioElement.volume = 0.5; // Set default volume here
    }, []);
    const toggleAudio=()=>{
        const audioElement =document.getElementById('audio-element');
        if(isPlaying){
            audioElement.pause();
        }
        else{
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    }



    
    const playpausebtn={
        fontSize:'1.5rem',
        margin:'10px'
    }


    return (
        <div id="music-master">
            <h2>Page Under Maintainence🛠️</h2><br />
            
            
            <audio id="audio-element"  src={audiosource}  />
            <button type="button" style={playpausebtn} onClick={toggleAudio}>
                {isPlaying ? '⏸️': '▶️'}
            </button>


            <img src="img/maintainence.gif" className='pomImage' alt='Page Under Maintainence'/>
            <p>Other pages are running normally.</p>
            <p>Until Then:</p>
            <a target="_blank" rel="noreferrer" href="https://anupdhoble.github.io/spotifyproject/"><button
                type="button">Spotify clone🔗</button></a>
        </div>
    );
};
