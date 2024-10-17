import React from 'react';
import ReviewCard from "./ReviewCard"

import styles from "./Reviews.module.css";

const Reviews = () => {
    return(
    <div className={styles.reviewsDiv}>
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Our Reviews</h2>
                <div className={styles.underline}></div>
            </div>
            <ReviewCard />
        </section>
    </div>
    )
}

export default Reviews;