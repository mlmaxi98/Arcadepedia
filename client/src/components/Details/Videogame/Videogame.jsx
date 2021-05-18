import React, { useEffect } from 'react'
import './Videogame.module.scss'
import { getGame } from '../../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Videogame.module.scss'
import Loading from '../../Loading/Loading'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import { esrb, icons } from '../../Home/Card/Consts'
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])
const Videogame = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const game = useSelector(state => state.game)
    const screens = useSelector(state => state.game_screens)

    useEffect(() => {
        dispatch(getGame(id))
        return () => {
            dispatch(getGame(null, true))
        }
    }, [dispatch, id])

    return (
        <div className={styles.container}>
            {
                Object.keys(game).length === 0 ?
                    <Loading />
                    :
                    <>
                        <div className={styles.screenshoots}>
                            {
                                screens.length > 0 ?
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
                                            screens.map((screenshot) => {
                                                return (
                                                    <SwiperSlide
                                                        className={styles.image}
                                                        key={screenshot.id}>
                                                        <img src={screenshot.image} alt="" />
                                                    </SwiperSlide>
                                                );
                                            })
                                        }
                                    </Swiper>
                                    :
                                    <img src="https://i.pinimg.com/originals/bf/60/01/bf60013dc14249ca5324bfcd9a9c7782.gif" alt="" />
                            }
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                <span>{game.name}</span>
                            </div>
                            <div className={styles.description}>
                                <span>About:</span>
                                <p>{game.description_raw}</p>
                            </div>
                            <div className={styles.data}>
                                <div className={styles.platforms}>
                                    <span>Platforms:</span>
                                    <ul>
                                        {game.platforms.map(item => (
                                            <li>
                                                {icons[item.platform.slug] || icons["default"]}
                                                <span>{item.platform.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.genres} >
                                    <span>Genres:</span>
                                    <ul>
                                        {
                                            game.genres.map(item => (
                                                <li>
                                                    <span>{item.name}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className={styles.esrb}>
                                    {esrb[game.esrb_rating?.slug || "rp"]}
                                </div>
                            </div>
                            {
                                (game.website || game.reddit_url) &&
                                <div className={styles.links}>
                                    <span>Websites:</span>
                                    {
                                        game.website &&
                                        <a href={game.website}><p>{game.website}</p></a>
                                    }
                                    {
                                        game.reddit_url &&
                                        <a href={game.reddit_url}><p>{game.reddit_url}</p></a>
                                    }
                                </div>
                            }
                        </div>
                    </>
            }
        </div>
    )

}

export default Videogame