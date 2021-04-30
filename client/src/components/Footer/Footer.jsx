import React from "react";
import styles from './Footer.module.scss'
import LogoF from '../../images/logoF.png'

const Footer = (props) => {


    return <div className={props.dark ? styles.containerDark : styles.container}>
        <hr className={styles.hr} />
        <div className={styles.footer}>
            <a className='icon' href='https://www.facebook.com/mikuxlyuuzaki/'>
                <img className='icono' src={LogoF} alt='#'></img>
            </a>
            <a className='icon' href='https://www.instagram.com/mlmaxi98/?hl=es-la'>
                <img className='icono' src='https://facebookbrand.com/wp-content/uploads/2019/10/Copy-of-instagram.svg' alt='#'></img>
            </a>
        </div>

    </div>
}
export default Footer;

