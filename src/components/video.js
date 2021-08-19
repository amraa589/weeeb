import React from "react"

const Video = ({url}) => {
    return (
        <div class="video-container">
            <div class="video">
                 <video src={url}></video>
            </div>
            
        </div>
    )
}

export default Video
