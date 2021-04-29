import React, { useEffect, useState } from 'react'
import './Videogame.module.scss'
import { getGameDetails } from '../../../Redux/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Videogame.module.scss'
import Loader from 'react-loader-spinner';
const Videogame = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const game = useSelector(state => state.gameDetail)

    useEffect(() => {
        dispatch(getGameDetails(id))
    }, [dispatch, id])


    return (
        <div>
            <span>{game.id}</span>
            <div className={props.dark ? styles.containerDark : styles.container}>
                {game ?
                    <div className='barra'>

                    </div>
                    :
                    <div className="spinner">
                        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                    </div>

                }
            </div>
        </div>)

}

export default Videogame
{/* <div className='container-game'>
    <div className='game-data'>

        <div className='game-name' >
            {props.game.name ? <h1>{props.game.name}</h1> : <h1>Cargando</h1>}
        </div>
        <div className='game-genres'>
            <span>Géneros: </span>
            {
                props.game.genres ?
                    props.game.genres
                        .map((genre, j) => {
                            return <li key={j}>{j + 1}) {genre.name}</li>
                        })
                    :
                    <span>NOT FOUND GENRES</span>
            }
        </div>

        <div className='game-description'>
            <span>DESCRIPCION:</span>
            {props.game.description_raw ? <p>{props.game.description_raw}</p> : <p>Cargando</p>}
        </div>

        <div className='game-released'>
            <span>FECHA DE LANZAMIENTO:</span>
            {props.game.released ? <li>{props.game.released}</li> : <li>Cargando</li>}
        </div>

        <div className='game-rating'>
            <span>RATING:</span>
            {props.game.rating ? resRating(props.game.rating) : <li>{star[0]} 0/5</li>}
        </div>

        <div className='game-platforms'>
            <span>Plataformas Disponibles: </span>
            {
                props.game.platforms ?
                    props.game.platforms.map((plat, j) => {
                        return <li key={j}>{j + 1}) {plat.name}</li>
                    })
                    :
                    <span>NOT FOUND GENRES</span>
            }
        </div>
    </div>
    <div className='game-background'>
        {props.game.background ? <img src={props.game.background} alt='#'></img> : <img src={NEW_GAME} alt='#'></img>}
    </div>
</div>
) */}