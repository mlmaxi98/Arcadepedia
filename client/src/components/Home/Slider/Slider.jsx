import React from 'react'
import styles from './Slider.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = ({ games }) => {
    return (
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
    )
}

export default Slider
