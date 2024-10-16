import React from "react";
import ReactDOM from 'react-dom';

import styles from "./Video.module.css";
import Vid1 from "../assets/videos/video1.mp4";
import Vid2 from "../assets/videos/video2.mp4";
import Vid3 from "../assets/videos/video3.mp4";
import Vid4 from "../assets/videos/video4.mp4";


const Video = () => {
    let url = Vid1;
    const [index, setIndex] = React.useState(0);
    console.log('CLIP', index);
    const videos = [Vid1, Vid2, Vid3, Vid4]
    console.log(videos.length);
    return (
        <div className={styles.videoDiv}>
            <video key={videos[index] || url} className={styles.video} autoPlay playsInline muted
            onEnded={() => {
                if (index + 1 == videos.length)
                    setIndex(0);
                else
                    setIndex((idx) => idx + 1);
                }}>
                <source src={videos[index] || url} />
            </video>
        </div>
    )
}

export default Video;