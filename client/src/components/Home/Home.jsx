import React from "react";
import { useSelector } from "react-redux";
import Filters from './Filters/Filters'
import Card from "./Card/Card";
import Loading from '../Loading/Loading'
import styles from "./Home.module.scss";

const Home = () => {
    const games = useSelector(state => state.games);
    return (
        <div className={styles.container}>
            <Filters />
            <div className={styles.sliders}>
                {
                    games.length === 0 ?
                        <Loading />
                        :
                        games.map(game => (
                            <div className={styles.card}>
                                <Card game={game} />
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Home;
