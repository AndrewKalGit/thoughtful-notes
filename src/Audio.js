import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio from './Time (Chillwave - Lofi - Electronic Mix) (1).mp3';

function Audio(props) {
    return (
        <>
        <div className='audio-container'>
        <ReactAudioPlayer src={audio}
            autoPlay={false}
            controls
            controlsList='noplaybackrate nodownload'
            className="custom-audio-player" 
            loop/>
        </div>       
        </>
    );
}

export default Audio;