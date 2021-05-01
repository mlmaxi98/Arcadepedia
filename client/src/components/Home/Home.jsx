import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import { getGames } from "../../Redux/actions/index";
import Cards from "./Cards/Cards";
import Slider from "./Slider/Slider";
import Loading from '../Loading/Loading'
import Loader from 'react-loader-spinner';
//import styles from './Loading.module.scss'

const generos = ["action", "indie", "shooter"];
const Home = (props) => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games);
    //const genres = useSelector(state => state.genres)
    //const platforms = useSelector(state => state.platforms)

    useEffect(() => {
        dispatch(
            getGames(
                "", //nombre
                "", //buscar por géneros
                "", //filtrar por plataformas
                "", //ordenar de diferentes formas
                1, //paginado
                null //cantidad de resultados
            )
        );
        //dispatch(getGenres())
        //dispatch(getPlatforms())
    }, [dispatch]);

    return (
        <div className={props.dark ? styles.containerDark : styles.container}>
            <div className={styles.sliders}>
                {games.length === 0 ?
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                    :
                    games.map((game) => {
                        return (
                            <div className={styles.card}>
                                <Slider game={game} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;
