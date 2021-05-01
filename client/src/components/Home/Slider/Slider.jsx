import React from 'react'
import styles from './Slider.module.scss'
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectFlip, Lazy } from 'swiper'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/lazy/lazy.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectFlip, Lazy])
const Slider = ({ games }) => {
    return (
        <Swiper
            navigation
            pagination={false}
            scrollbar={false}
            //autoHeight={false}
            loop={true}
            grabCursor={true}
            lazy={
                { loadPrevNext: true }
            }
        >
            {
                games.sort(() => Math.random() - 0.5).map((game) => {
                    return (
                        <SwiperSlide
                            key={game.id}
                            className={styles.card}
                            //style={`backgroundImage: url(${game.background_image})`}
                            
                        >
                            <div className={styles.title}>
                                <span>{game.name}</span>
                            </div>
                            <div className={styles.image}>
                                <img src={game.background_image} alt='' />
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    )
}

export default Slider

/* return (
    <Carousel
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
    >
        {games.sort(() => Math.random() - 0.5).map((game) => {
            return (
                <div
                    key={game.id}
                    className={styles.card}
                >
                    <div
                        className={styles.image}

                    >

                        <img
                            src={game.background_image} alt=''
                        />
                    </div>
                </div>
            )
        })}
    </Carousel>
) */