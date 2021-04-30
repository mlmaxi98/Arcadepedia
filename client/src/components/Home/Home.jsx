import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from './Home.module.scss'
import { NavLink } from 'react-router-dom'
import { getGames, getGenres, getPlatforms } from '../../Redux/actions/index'
import Cards from './Cards/Cards';
import Slider from './Slider/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = (props) => {
    const dispatch = useDispatch()
    const games = useSelector(state => state.games)
    //const genres = useSelector(state => state.genres)
    //const platforms = useSelector(state => state.platforms)



    useEffect(() => {

        dispatch(getGames('','action,indie','','name',2,3))
        //dispatch(getGenres())
        //dispatch(getPlatforms())

    }, [dispatch])


    return (
        <div className={props.dark ? styles.containerDark : styles.container}>
            {games ?
                <div className={styles.sliders}>
                    <div className={styles.genres}>
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            stopOnHover={true}
                            swipeable={true}
                            emulateTouch={true}
                            showThumbs={false}
                        >
                            {games.map((genre) => {
                                return <div key={genre.id} className={styles.image}>
                                    <img src={genre.image_background} alt='' />
                                </div>
                            })}
                        </Carousel>
                    </div>
                    <div className={styles.info}>
                        <span>lorem*30</span>
                    </div>
                </div>
                :
                <div className="spinner">

                </div>
            }

        </div>
    )
}


export default Home;
