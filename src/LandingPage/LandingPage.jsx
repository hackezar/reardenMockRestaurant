import Navbar from "../Navbar/Navbar";
import Video from "../Video/Video"
import AddressBar from "../AddressBar/AddressBar"
import PartiesSection from "./PartiesSection/PartiesSection";
import LinksSlider from "./ImageSlider/ImageSlider";
import ReservationSection from "./ReservationsSection/ReservationsSection";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";
import Reviews from "./Reviews/Reviews";
import Newsletter from "./Newsletter/Newsletter";
import Map from "./Map/Map"

import styles from "./LandingPage.module.css";


const LandingPage = () => {

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
            <Reviews />
            <div className={styles.newsLetterMapDiv}>
                <Newsletter />
                <Map />
            </div>
        </div>
    )
}

export default LandingPage;