import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cards.module.scss'

const Cards = (props) => {
    return (
        <div className={props.dark ? styles.containerDark : styles.container} >
            <div className={styles.name}>
                <NavLink to={`/home/genre/${props.id}`}>
                    {props.name}
                </NavLink>
            </div>
            <div className={styles.images}>
                <img src={props.image || `https://cdn.iconscout.com/icon/free/png-512/data-not-found-1965034-1662569.png`}
                    alt='.'
                />
            </div>
        </div>
    )
}

export default Cards
