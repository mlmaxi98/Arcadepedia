import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import { icons, esrb } from './Consts'
import styles from './Card.module.scss'
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const Card = ({ game }) => {
    let platforms = game.platforms?.map(item => item.platform).sort(() => Math.random() - 0.5)
    let score = Math.trunc(game.rating)
    let long = game.platforms.length - 3
    const [isShown, setIsShown] = useState(false)
    return (
        <div className={styles.container}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div className={styles.images}>
                {game.short_screenshots.length > 0 ?
                    <Swiper
                        navigation={false}
                        pagination={false}
                        autoHeight={false}
                        loop
                        effect="fade"
                        grabCursor
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                    >
                        {
                            game.short_screenshots.map(screenshot => (
                                <SwiperSlide key={screenshot.id}>
                                    <img src={screenshot.image} alt="" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    : <img src="https://i.pinimg.com/originals/bf/60/01/bf60013dc14249ca5324bfcd9a9c7782.gif" alt="" />
                }
            </div>
            <div className={styles.info}>

                {!isShown ?
                    <>
                        <div className={styles.title}>
                            <NavLink to={`/home/videogame/${game.id}`}>
                                <span>{game.name}</span>
                            </NavLink>
                        </div>
                        <div className={styles.available}>
                            <div className={styles.pm}>
                                <ul className={styles.platforms} >
                                    {
                                        platforms.length > 3 ?
                                            <>
                                                {
                                                    platforms.slice(0, 3).map(platform => (
                                                        <li
                                                            key={platform.id}
                                                            className={styles.icon}
                                                        >
                                                            {icons[platform.slug || "default"]}
                                                        </li>
                                                    ))
                                                }
                                                <li className={styles.long}>
                                                    <span>{long}+</span>
                                                </li>
                                            </>
                                            :
                                            platforms.map(platform => (
                                                <li
                                                    key={platform.id}
                                                    className={styles.icon}
                                                >
                                                    {icons[platform.slug || "default"]}
                                                </li>
                                            ))
                                    }
                                </ul>
                                <div className={styles.scores}>
                                    <div className={styles.rating}>
                                        <span>
                                            {[...Array(score)].map(i => <StarIcon key={i} style={{ fontSize: "1rem" }} />)}
                                            {[...Array(5 - score)].map(j => <StarBorderIcon key={j} style={{ fontSize: "1rem" }} />)}
                                        </span>
                                    </div>
                                    <div className={styles.metrics}>
                                        {
                                            game.metacritic > 85 ?
                                                <span className={styles.green}>{game.metacritic}</span>
                                                : game.metacritic > 50 ?
                                                    <span className={styles.greenyellow}>{game.metacritic}</span>
                                                    : game.metacritic > 30 ?
                                                        <span className={styles.yellow}>{game.metacritic}</span>
                                                        : game.metacritic > 15 ?
                                                            <span className={styles.orange}>{game.metacritic}</span>
                                                            : <span className={styles.red}>{game.metacritic || 0}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.esrb}>
                                {esrb[game.esrb_rating?.slug || "rp"]}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.more}>
                            <NavLink to={`/home/videogame/${game.id}`}>
                                <button>More Details</button>
                            </NavLink>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Card