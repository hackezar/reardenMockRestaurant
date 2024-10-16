import Datetime from 'react-datetime';

import styles from "./ReservationsSection.module.css";
import "react-datetime/css/react-datetime.css";

export default function ReservationSection() {
    return (
        <div className={styles.reservationDiv}>
            <div className={styles.headerDiv}>
                <p className={styles.header1}>RESERVATIONS</p>
                <p className={styles.header2}>Call us at (443)-356-9130 or book a table below</p>
            </div>
            <Datetime className={styles.timePicker}/>
            <button type="button" className={styles.btn}>BOOK TABLE</button>
        </div>
    )
}