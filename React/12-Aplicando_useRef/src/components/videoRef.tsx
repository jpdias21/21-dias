import React, { useRef } from 'react';
import video from '../assets/video.mp4'
function VideoPlayer() {
    
    const videoRef = useRef<HTMLVideoElement>(null)
    
    const Play = () => {
        if(videoRef.current){
            videoRef.current.play()
        }
    }
    const Pause = () => {
    if(videoRef.current){
        videoRef.current.pause()
    }
    }
  return (
    <>
    <h2>WhiPlast</h2>
    <video ref={videoRef} controls>
        <source src={video} type='video/mp4'/>
    </video>
    <br />
    <button onClick={Play}>Play</button>
    <button onClick={Pause}>Pause</button>
    </>
  );
}

export default VideoPlayer;