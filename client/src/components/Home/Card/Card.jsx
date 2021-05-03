import React from 'react'
import styles from './Card.module.scss'
//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import {
    SiPlaystation,
    SiSteam,
    SiXbox,
    SiWindows,
    SiAndroid,
    SiNintendoswitch,
    SiNintendo3Ds,
    SiApple,

} from "react-icons/si";
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const Card = ({ game }) => {
    let platforms = game.platforms.map(item => {
        return item.platform
    })
    //console.log('Plataformas:', platforms)
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <Swiper
                    navigation={false}
                    pagination={false}
                    autoHeight={false}
                    loop={true}
                    effect={'fade'}
                    grabCursor={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
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
            <div className={styles.info}>

                <div className={styles.title}>
                    <span>{game.name}</span>
                </div>
                <ul className={styles.platforms} >
                    {
                        platforms.map(platform => {
                            return <li>{platform.name}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card