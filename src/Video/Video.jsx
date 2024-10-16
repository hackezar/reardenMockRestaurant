import styles from "./Video.module.css";
import BeerVid from "../assets/beers.mp4";

const Video = () => {
    return (
        <div className={styles.videoDiv}>
            <video className={styles.video}>
                <source src={BeerVid} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;