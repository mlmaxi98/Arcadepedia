import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.scss";
import Filters from './Filters/Filters'

import Card from "./Card/Card";
import Loading from '../Loading/Loading'

const Home = (props) => {
    const games = useSelector((state) => state.games);
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
