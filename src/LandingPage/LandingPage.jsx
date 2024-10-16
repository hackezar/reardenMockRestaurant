import Navbar from "../Navbar/Navbar";
import Video from "../Video/Video"
import AddressBar from "../AddressBar/AddressBar"
import PartiesSection from "./PartiesSection/PartiesSection";
import styles from "./LandingPage.module.css";


const LandingPage = ({}) => {

    return (
        <div className={styles.landingPageDiv}>
            <Navbar />
            <Video />
            <AddressBar />
            <PartiesSection />
        </div>
    )
}

export default LandingPage;