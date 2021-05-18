import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import styles from './Navbar.module.scss'
import Logo from '../../images/logo2.png'
const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <NavLink to={"/home"} >
                        <img src={Logo} alt="" />
                    </NavLink>
                </div>
                <ul className={styles.links}>
                    <li>
                        <NavLink to={"/home"}>
                            <HomeIcon style={{ fontSize: "1.5rem" }} />
                        </NavLink>
                    </li>
                    <li><NavLink to={"/"}>SALIR</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar