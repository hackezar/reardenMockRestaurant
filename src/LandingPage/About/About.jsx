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
                    <p className={styles.bio}>We understand that at the heart of any tavern is its beer selection. With 20 beers (many regionally crafted), 4 wines, and 2 cocktails on tap, along with an extensive wine and cocktail list, Stillwaters Tavern certainly lives up to its name.
                    Ideally located on Beach Drive with access to waterfront views, Stillwaters Tavern invites you to partake in the lighthearted ambiance as we deliver some of the most creative food being served in Tampa Bay. Our patio offers a clear view of the NEW iconic St. Pete Pier, gorgeous Tampa Bay and bustling Beach Drive. St. Pete has again been named the #1 Mid-Size Arts City in the nation, and Stillwaters Tavern is within blocks of the Chihuly Exhibit, Museum of Fine Arts, The James Museum of Western & Wildlife Art, the Museum of the American Arts and Crafts Movement, and the Dali Museum. </p>
                    <button className={styles.moreBtn} type="button">READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default About;