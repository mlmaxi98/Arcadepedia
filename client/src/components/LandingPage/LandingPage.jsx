import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LandingPage.module.scss'
const LandingPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span>ARCADEPEDIA</span>
            </div>
            <NavLink to={'/home'} className={styles.start}>
                <span>START</span>
            </NavLink>
        </div>
    )
}
export default LandingPage;