import React, { useEffect, useState } from 'react'
import './Videogame.module.scss'
import { getGame } from '../../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Videogame.module.scss'
import Loading from '../../Loading/Loading'
const Videogame = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const game = useSelector(state => state.game)

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
                        <div className={styles.info}>
                            <span className={styles.name}>{game.name}</span>
                            <p className={styles.description}>{game.description_raw}</p>
                        </div>
                        <div className={styles.screenshoots}>
                            <img src={game.background_image} alt='' />
                        </div>
                    </>
            }

        </div>
    )

}

export default Videogame