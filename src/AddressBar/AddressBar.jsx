import styles from "./AddressBar.module.css";
import LocationIcon from "../assets/locationIcon.svg";

const AddressBar = ( ) => {
    return (
        <div className={styles.addressBarDiv}>
            <img src={LocationIcon} className={styles.locationIcon} />
            <p>4700 Gulf Blvd. St. Pete Beach, FL 33706</p>
        </div>
    )
}

export default AddressBar;