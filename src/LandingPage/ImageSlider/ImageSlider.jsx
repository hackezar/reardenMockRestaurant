import React, { useRef } from "react";
import Slider from "react-slick";

import styles from "./ImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/fonts/BaskervvilleSC-Regular.ttf";

import Pic1 from "../../assets/imageSliderPics/pic1.jpg";
import Pic2 from "../../assets/imageSliderPics/pic2.jpg";
import Pic3 from "../../assets/imageSliderPics/pic3.jpg";
import Pic4 from "../../assets/imageSliderPics/pic4.jpg";
import ArrowFwd from "../../assets/icons/arrowFwd.png";
import ArrowBack from "../../assets/icons/arrowBack.png";


const LinksSlider = () => {
  let sliderRef = React.useRef(null);

  var settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.entireDiv}>
      <Slider ref={sliderRef} className={styles.slider} {...settings}>
        <div className={styles.sliderDiv}>
          <img className={styles.image} src={Pic1} />
          <div>
            <p className={styles.text}>Located On Beach Drive</p>
            <buttton type="button" className={`${styles.sliderBtn} ${styles.fancyFont}`}>OUR MENU</buttton>
          </div>
          </div>
            <div className={styles.sliderDiv}>
            <img className={styles.image} src={Pic2} />
            <div>
              <p className={styles.text}>Big Group Parties</p>
              <buttton type="button" className={`${styles.sliderBtn} ${styles.fancyFont}`}>PARTIES</buttton>
            </div>
          </div>
          <div className={styles.sliderDiv}>
            <img className={styles.image} src={Pic3} />
            <div>
              <p className={styles.text}>Book Your Table</p>
              <buttton type="button" className={`${styles.sliderBtn} ${styles.fancyFont}`}>RESERVATIONS</buttton>
            </div>
          </div>
            <div className={styles.sliderDiv}>
            <img className={styles.image} src={Pic4} />
          <div>
            <p className={styles.text}>Join Our Team</p>
            <buttton type="button" className={`${styles.sliderBtn} ${styles.fancyFont}`}>JOBS</buttton>
          </div>
        </div>
      </Slider>
      <div className={styles.arrowDiv}>
        <img className={styles.arrowBack} onClick={() => sliderRef?.current?.slickPrev()} src={ArrowBack} />
        <img className={styles.arrowFwd} onClick={() => sliderRef?.current?.slickNext()} src={ArrowFwd} />
      </div>
    </div>

  );
}

export default LinksSlider;