import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styles from './Home.module.scss'
import { NavLink } from 'react-router-dom'
import { getGames } from '../../Redux/actions/index'
import Cards from './Cards/Cards';
import Slider from './Slider/Slider';


const generos = ['action', 'indie', 'shooter']
const Home = (props) => {
    const dispatch = useDispatch()
    const games = useSelector(state => state.games)
    //const genres = useSelector(state => state.genres)
    //const platforms = useSelector(state => state.platforms)


    useEffect(() => {

        dispatch(getGames(
            '',//nombre
            '',//buscar por géneros
            '',//filtrar por plataformas
            '',//ordenar de diferentes formas
            2,//paginado
            null,//cantidad de resultados
        ))
        //dispatch(getGenres())
        //dispatch(getPlatforms())

    }, [dispatch])


    return (
        <div className={props.dark ? styles.containerDark : styles.container}>

            <div className={styles.sliders}>
                <div className={styles.one}>
                    <div className={styles.carousel}>
                        <Slider games={games} />
                    </div>
                </div>

                <div className={styles.two}>
                    <div className={styles.carousel}>
                        <Slider games={games} />
                    </div>
                </div>

                <div className={styles.three}>
                    <div className={styles.carousel}>
                        <Slider games={games} />
                    </div>
                </div>
                {/* <div className={styles.games}>
                        <span>Actions</span>
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            stopOnHover={true}
                            swipeable={true}
                            emulateTouch={true}
                            showThumbs={false}
                        >
                            {games.sort(() => Math.random() - 0.5).map((game) => {
                                return <div key={game.id} className={styles.image}>
                                    <img src={game.background_image} alt='' />
                                </div>
                            })}
                        </Carousel>
                    </div>
                    <div className={styles.games}>
                        <span>Actions</span>
                        <Carousel
                            autoPlay={false}
                            infiniteLoop={true}
                            stopOnHover={true}
                            swipeable={true}
                            emulateTouch={true}
                            showThumbs={false}
                        >
                            {games.sort(() => Math.random() - 0.5).map((game) => {
                                return <div key={game.id} className={styles.image}>
                                    <img src={game.background_image} alt='' />
                                </div>
                            })}
                        </Carousel>
                    </div>
                    <div className={styles.info}>
                        <span>lorem*30</span>
                    </div> */}

            </div>
        </div>
    )
}


export default Home;
