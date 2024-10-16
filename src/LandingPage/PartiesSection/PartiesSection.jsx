import styles from "./PartiesSection.module.css";
import "../../assets/fonts/BaskervvilleSC-Regular.ttf"

import PartiesImg from "../../assets/PartiesImg.jpg"

const PartiesSection = () => {
    return (
        <section className={styles.partiesSection}>
            <div className={styles.leftSide}>
                <h3 className={styles.header1}>Parties</h3>
                <h6 className={`${styles.header2} ${styles.fancyFont}`}>Planning A Party? We Can Help!</h6>
                <p className={styles.partyInfo}>Whether it’s a small gathering of 20 people or a large gathering of 80, whether it’s inside or outside, choose a fixed menu or order from the menu (not available for larger parties).</p>
                <p className={styles.partyInfo}>View our <b>Party Menu Offerings</b>. When you’ve chosen your menu for food and drinks, begin your Event Inquiry by visiting our <b>Large Party Request</b> page.</p>
                <p className={styles.partyInfo}>We look forward to helping you plan your event and making it memorable for you and your guests!</p>
                <button type="button" className={`${styles.partiesBtn} ${styles.fancyFont}`} >PARTIES</button>
            </div>
            <div className={styles.rightSide}>
                <img src={PartiesImg} className={styles.partiesImg} />
            </div>

        </section>
    )
}

export default PartiesSection;