import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer(props) {
    return (
        <h1>{props.text}</h1>
        // <ReactPlayer url={props.text} height="500" width="750" controls />
    )
}

export default VideoPlayer