import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer(props) {
    return (
        <>
            <video src={props.text} height="auto" width="100%" controls >
                <source src={props.text} type='video/mp4' />
            </video>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=iu-LBY7NXD4' height="500" width="750" controls /> */}
        </>
    )
}

export default VideoPlayer