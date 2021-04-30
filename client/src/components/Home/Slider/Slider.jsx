import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.scss'
const Slider = (props) => {
    return (
        <div className={props.dark ? styles.containerDark : styles.container}>

            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={true}
                swipeable={true}
                emulateTouch={true}
            >
                {props.genres.map((genre) => {
                    return <img src={genre.image_background} />
                })}
            </Carousel>
        </div>
    )
}

export default Slider
