import React from 'react'
import styles from './Slider.module.scss'
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const Slider = ({ game }) => {
    let platforms = game.platforms.map(item => {
        return item.platform
    })
    console.log('Plataformas:', platforms)
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>{game.name}</span>
            </div>
            <div className={styles.images}>

                <Swiper
                    navigation={false}
                    pagination={false}
                    autoHeight={false}
                    loop={true}
                    effect={'fade'}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    grabCursor={true}
                //delay={1000}

                >

                    {
                        game.short_screenshots.map((screenshot) => {
                            return (
                                <SwiperSlide key={game.id}>
                                    <img src={screenshot.image} alt='' />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
            <ul className={styles.platforms} >
                {
                    platforms.map(platform => {
                        return <li>{platform.name}</li>
                    })
                }
            </ul>
        </div >
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