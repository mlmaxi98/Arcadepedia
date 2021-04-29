import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, EffectFlip } from 'swiper'
import Cards from '../Cards/Cards'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-flip/effect-flip.scss';
import 'swiper/components/lazy/lazy.scss'
import './Slider.scss'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFlip])
const Slider = (props) => {
    return (

        <Swiper
            navigation
            effect="flip"
            pagination={false}
            scrollbar={false}
            autoHeight={false}
            loop={true}
            grabCursor={true}
            breakpoints={
                {
                    //Solo celulares
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    //Tablets medianas y Celulares grandes
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    //Laptops pequeñas y tablets grandes
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    //Laptops grandes y PC
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                    1600: {
                        slidesPerView: 5,
                        spaceBetween: 0
                    },
                }
            }
        >
            {props.genres.map((genre) => {
                return <SwiperSlide
                    key={genre.id}
                >
                    <Cards
                        id={genre.id}
                        name={genre.name}
                        image={genre.image_background}
                        dark={props.dark}
                    />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default Slider
