import styles from './Footer.module.css';

import XLogo from "../../assets/Twitter X Logo PNG.jpg";
import FacebookLogo from "../../assets/FacebookLogo.jpg";
import InstaLogo from "../../assets/blackInsta.png";
import YelpLogo from "../../assets/yelpBlack.png";

const Footer = () => {
return (
    <div className={styles.container}>
        <div className={styles.locationColumn}>
            <p className={styles.header}>LOCATION</p>
            <div className={styles.locationInnerDiv}>
                <p className={styles.locationSub}>7128 36th Ave North</p>
                <p className={styles.locationSub}>St. Petersburg, FL</p>
                <p className={styles.locationSub}>33710</p>
            </div>
        </div>
        <div className={`${styles.hoursColumn} ${styles.location}`}>
            <p className={styles.header}>HOURS</p>
            <div className={styles.hoursDiv}>
                <p>Mon, Tue, Wed, Thur</p>
                <p>11:30 AM - 11:00 PM</p>
            </div>
            <div className={styles.hoursDiv}>
                <p>Fri</p>
                <p>11:30 AM - 11:00 PM</p>
            </div>
            <div className={styles.hoursDiv}>
                <p>Sat</p>
                <p>11:00 AM - 11:00 PM</p>
            </div>
            <div className={styles.hoursDiv}>
                <p>Sun</p>
                <p>11:00 AM - 9:00 PM</p>
            </div>
            <div className={styles.hoursDiv}>
                <p>Happy Hour Daily from open until 7pm everyday</p>
            </div>
            <div className={styles.hoursDiv}>
                <p>Saturday & Sunday Brunch 11:00am - 3:00pm</p>
            </div>
            <div className={styles.hoursDiv}>
                <p>Gluten Friendly (GF) | Vegetarian (V) | Vegan (VG)</p>
            </div>
        </div>
        <div className={styles.contactColumn}>
            <div className={styles.findUsDiv}>
                <p className={styles.header}>FIND US ON</p>
                <div className={styles.socialsDiv}>
                    <img className={styles.social} src={XLogo}/>
                    <img className={styles.social} src={FacebookLogo}/>
                    <img className={styles.social} src={InstaLogo}/>
                    <img className={`${styles.social} ${styles.xSocial}`} src={YelpLogo}/>
                </div>
            </div>
            <div className={styles.contactUsDiv}>
                <p className={`${styles.header} ${styles.contactHead}`}>CONTACT US</p>
                <p className={styles.contactSub}>(443)-356-9130</p>
                <p className={styles.contactSub}>jackhalcisak@outlook.com</p>
            </div>
        </div>
    </div>
)
}

export default Footer;