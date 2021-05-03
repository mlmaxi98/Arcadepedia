import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.scss";
import Filters from './Filters/Filters'
import { NavLink } from "react-router-dom";

import Card from "./Card/Card";
import Loading from '../Loading/Loading'
import Loader from 'react-loader-spinner';
import { cleanGames } from "../../Redux/actions";
//import styles from './Loading.module.scss'

const generos = ["action", "indie", "shooter"];
const Home = (props) => {
    const games = useSelector((state) => state.games);
    //const genres = useSelector(state => state.genres)
    //const platforms = useSelector(state => state.platforms)


    return (
        <div className={props.dark ? styles.containerDark : styles.container}>
            <Filters dark={props.dark} />
            <div className={styles.sliders}>
                {games.length === 0 ?
                    <Loading />
                    :
                    games.map((game) => {
                        return (
                            <div className={styles.card}>
                                <Card game={game} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;
