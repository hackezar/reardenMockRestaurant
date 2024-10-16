import styles from "./Gallery.module.css";

import Food1 from "../../assets/foodGallery/food1.jpg";
import Food2 from "../../assets/foodGallery/food2.jpg";
import Food3 from "../../assets/foodGallery/food3.jpg";
import Food4 from "../../assets/foodGallery/food4.jpg";
import Food5 from "../../assets/foodGallery/food5.jpg";
import Food6 from "../../assets/foodGallery/food6.jpg";
import Drink1 from "../../assets/foodGallery/drink1.jpg";
import Drink2 from "../../assets/foodGallery/drink2.jpg";
import Drink3 from "../../assets/foodGallery/drink3.jpg";
import Drink4 from "../../assets/foodGallery/drink4.jpg";
import Drink5 from "../../assets/foodGallery/drink5.jpg";
import Drink6 from "../../assets/foodGallery/drink6.jpg";



const Gallery = () => {
    return (
        <div className={styles.galleryDiv}>
            <p className={styles.header}>DEFINING DELICIOUS</p>
            <div className={styles.imageGallery}>
                <img className={styles.img} src={Food1} />
                <img className={styles.img} src={Drink1} />
                <img className={styles.img} src={Food2} />
                <img className={styles.img} src={Drink2} />
                <img className={styles.img} src={Food3} />
                <img className={styles.img} src={Drink3} />
                <img className={styles.img} src={Food4} />
                <img className={styles.img} src={Drink4} />
                <img className={styles.img} src={Food5} />
                <img className={styles.img} src={Drink5} />
                <img className={styles.img} src={Food6} />
                <img className={styles.img} src={Drink6} />
            </div>
        </div>
    )
}

export default Gallery;