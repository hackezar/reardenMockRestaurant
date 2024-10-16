import styles from './Navbar.module.css';
// Images
import Logo from "../assets/Rearden Digital Logo AI.webp";
import XLogo from "../assets/X_logo_2023_(white).png";
import FBLogo from "../assets/FacebookLogo.jpg";
import InstaLogo from "../assets/instaLogo.png";
import YelpLogo from "../assets/yelp.svg";
//

const Navbar = ({}) => {
    return(
        <section className={styles.navbar}>
            <img className={styles.logo} src={Logo}/>
            <h3 className={styles.headerText}>Reardens</h3>
            <h4 className={styles.headerText}>Tavern</h4>
            <h5 className={styles.headerText}>American Scratch Kitchen + Bar</h5>
            <div className={styles.links}>
                <ul className={styles.routesList}>
                    <li className={styles.routeItem}>Menu</li>
                    <li className={styles.routeItem}>Drinks</li>
                    <li className={styles.routeItem}>Order</li>
                    <li className={styles.routeItem}>Reserve</li>
                    <li className={styles.routeItem}>Catering</li>
                    <li className={styles.routeItem}>Careers</li>
                </ul>
                <ul className={styles.socials}>
                    <li className={styles.socialsItem}>
                        <img src={XLogo} className={styles.socialsImg}/>
                    </li>
                    <li className={styles.socialsItem}>
                        <img src={FBLogo} className={styles.socialsImg}/>
                    </li>
                    <li className={styles.socialsItem}>
                        <img src={InstaLogo} className={styles.socialsImg}/>
                    </li>
                    <li className={styles.socialsItem} >
                        <img src={YelpLogo} className={styles.socialsImg} id={styles.yelpLogo} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar