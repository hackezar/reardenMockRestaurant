import Navbar from "../Navbar/Navbar";
import Video from "../Video/Video"
import AddressBar from "../AddressBar/AddressBar"
import styles from "./LandingPage.module.css";


const LandingPage = ({}) => {

    return (
        <div className={styles.landingPageDiv}>
            <Navbar />
            <Video />
            <AddressBar />
        </div>
    )
}

export default LandingPage;