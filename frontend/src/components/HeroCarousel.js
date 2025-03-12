import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/HeroCarousel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    // הגדרות הקרוסלה
    const settings = {
        dots: true, // נקודות ניווט
        infinite: true, // גלילה אינסופית
        speed: 500, // מהירות המעבר
        slidesToShow: 1, // מספר שקופיות מוצגות
        slidesToScroll: 1, // מספר שקופיות לגלילה
        autoplay: true, // מעבר אוטומטי
        autoplaySpeed: 3000, // זמן בין מעברים (מילישניות)
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {/* תמונה ראשונה */}
                <div className={styles.slide}>
                    <img
                        src="/images/image6.webp"
                        alt="תמונה 1"
                        className={styles.image}
                    />
                </div>
                {/* תמונה שנייה */}
                <div className={styles.slide}>
                    <img
                        src="/images/image7.webp"
                        alt="תמונה 2"
                        className={styles.image}
                    />
                </div>
                {/* תמונה שלישית */}
                <div className={styles.slide}>
                    <img
                        src="/images/image8.webp"
                        alt="תמונה 3"
                        className={styles.image}
                    />
                </div>
            </Slider>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default HeroCarousel;
