import Navbar from "../Navbar/Navbar";
import Video from "../Video/Video"
import AddressBar from "../AddressBar/AddressBar"
import PartiesSection from "./PartiesSection/PartiesSection";
import LinksSlider from "./ImageSlider/ImageSlider";
import ReservationSection from "./ReservationsSection/ReservationsSection";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";

import styles from "./LandingPage.module.css";


const LandingPage = ({}) => {

    return (
        <div className={styles.landingPageDiv}>
            <Navbar />
            <Video />
            <AddressBar />
            <PartiesSection />
            <LinksSlider />
            <ReservationSection />
            <Gallery />
            <About />
        </div>
    )
}

export default LandingPage;