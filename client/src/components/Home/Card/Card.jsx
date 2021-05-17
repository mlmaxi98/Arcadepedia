import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Card.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import {
    SiPlaystationvita,
    SiPlaystation,
    SiXbox,
    SiWindows,
    SiAndroid,
    SiNintendoswitch,
    SiNintendo3Ds,
    SiNintendo,
    SiApple,
    SiNintendogamecube,
    SiLinux,
    SiWiiu,
    SiWii,

} from "react-icons/si";
import { RiMacbookLine, RiGamepadFill } from "react-icons/ri";
import { GiGamepadCross } from "react-icons/gi";
import e from '../../../images/e.png'
import t from '../../../images/t.png'
import m from '../../../images/m.png'
import a from '../../../images/a.png'
import rp from '../../../images/rp.png'

export const esrb = (type) => {
    switch (type) {
        case 'everyone': return <img src={e} alt='' />
        case 'everyone-10-plus': return <img src={e} alt='' />
        case 'teen': return <img src={t} alt='' />
        case 'mature': return <img src={m} alt='' />
        case 'adults-only': return <img src={a} alt='' />
        default: return <img src={rp} alt='' />
    }
}
export const icons = (icon) => {

    switch (icon) {
        case 'pc': return <SiWindows />;
        case 'playstation5': return <SiPlaystation />;
        case 'playstation4': return <SiPlaystation />;
        case 'xbox-one': return <SiXbox />;
        case 'xbox-series-x': return <SiXbox />;
        case 'nintendo-switch': return <SiNintendoswitch />;
        case 'ios': return <SiApple />;
        case 'android': return <SiAndroid />;
        case 'nintendo-3ds': return <SiNintendo3Ds />;
        case 'nintendo-ds': return <SiNintendo />;
        case 'nintendo-dsi': return <SiNintendo />;
        case 'macos': return <RiMacbookLine />;
        case 'linux': return <SiLinux />;
        case 'xbox360': return <SiXbox />;
        case 'xbox-old': return <SiXbox />;
        case 'playstation3': return <SiPlaystation />;
        case 'playstation2': return <SiPlaystation />;
        case 'playstation1': return <SiPlaystation />;
        case 'ps-vita': return <SiPlaystationvita />;
        case 'psp': return <GiGamepadCross />;
        case 'wii-u': return <SiWiiu />;
        case 'wii': return <SiWii />;
        case 'gamecube': return <SiNintendogamecube />;
        case 'nintendo-64': return <SiNintendo />;
        case 'game-boy-advance': return <SiNintendo />;
        case 'windows': return <SiWindows />;
        default: return <RiGamepadFill />;
    }
}

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const Card = ({ game }) => {
    let platforms = game.platforms?.map(item => {
        return item.platform
    })
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
                                    <SwiperSlide key={screenshot.id}>
                                        <img src={screenshot.image} alt='' />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                    : <img src='https://i.pinimg.com/originals/bf/60/01/bf60013dc14249ca5324bfcd9a9c7782.gif' alt='' />
                }
            </div>
            <div className={styles.info}>

                {!isShown ? <>
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
                                            {platforms.sort(() => Math.random() - 0.5).slice(0, 3).map((platform) => {
                                                return <li
                                                    key={platform.id}
                                                    className={styles.icon}>
                                                    {icons(platform.slug)}
                                                </li>
                                            })}
                                            <li
                                                className={styles.long}
                                            >
                                                <span>
                                                    {long}+
                                                </span>
                                            </li>
                                        </>
                                        :
                                        platforms.sort(() => Math.random() - 0.5).map((platform) => {
                                            return <li
                                                key={platform.id}
                                                className={styles.icon}>
                                                {icons(platform.slug)}
                                            </li>
                                        })
                                }
                            </ul>

                            <div className={styles.scores}>
                                <div className={styles.rating}>
                                    <span>
                                        {[...Array(score)].map((i) => {
                                            return <StarIcon key={i} style={{ fontSize: "1rem" }} />;
                                        })}
                                        {[...Array(5 - score)].map((ii) => {
                                            return <StarBorderIcon key={ii} style={{ fontSize: "1rem" }} />;
                                        })}
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
                            {esrb(game.esrb_rating?.slug || 'rp')}
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