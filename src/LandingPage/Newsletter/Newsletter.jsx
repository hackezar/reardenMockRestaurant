import styles from "./Newsletter.module.css";
import "../../assets/fonts/BaskervvilleSC-Regular.ttf"


const Newsletter = () => {
    return (
        <div className={styles.newsletterDiv}>
            <p className={styles.heading}>NEWSLETTER</p>
            <button type="button" className={styles.btn}>SIGN UP</button>
        </div>
    )
}

export default Newsletter