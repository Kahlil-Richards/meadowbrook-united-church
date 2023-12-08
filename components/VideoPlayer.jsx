// "use client"
import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer(props) {
    return (
        <ReactPlayer url={props.text}>
            <source src={props.text} type="video/mp4"></source>
        </ReactPlayer>
    )
}

export default VideoPlayer