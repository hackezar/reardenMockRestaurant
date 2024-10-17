import styles from "./About.module.css";
import "../../assets/fonts/BaskervvilleSC-Regular.ttf"


import AboutPic from "../../assets/aboutPic.jpg";

const About = () => {
    return (
        <div className={styles.aboutDiv}>
            <div className={styles.leftSide}>
                <img className={styles.aboutImg} src={AboutPic} />
            </div>
            <div className={styles.rightSide}>
                <div className={styles.insideDiv}>
                    <p className={styles.header1}>ABOUT US</p>
                    <p className={styles.header2}>An American Scratch Kitchen + Bar</p>
                    <p className={styles.bio}>The menu highlights items from both land and sea, with a focus on bringing unique flavors from the kitchen to your table. We look to our exceptional collaboration with local artisans, farmers and foragers to serve the best seasonal and locally produced dairy, vegetables, grains, seafood and shellfish. </p>
                    <button className={styles.moreBtn} type="button">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default About;