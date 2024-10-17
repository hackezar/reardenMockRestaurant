import React from "react";

import styles from "./Map.module.css";

const MapSection = () => {
    return (
        <div className={styles.container}>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.294771412663!2d-82.71013822304846!3d27.73905272408961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e29bfc316ff7%3A0x51c6de69ca1ac43e!2sPia&#39;s%20Trattoria!5e0!3m2!1sen!2sus!4v1729182056613!5m2!1sen!2sus" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    )
}

export default MapSection;

