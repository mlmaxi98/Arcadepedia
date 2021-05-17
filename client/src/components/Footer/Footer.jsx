import React from "react";
import styles from './Footer.module.scss'
import { SiFacebook, SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
const Footer = (props) => {

    return <div className={props.dark ? styles.containerDark : styles.container}>
        <div className={styles.footer}>
            <a className='icon' href='https://github.com/mlmaxi98'>
                <SiGithub />
            </a>
            <a className='icon' href='https://www.linkedin.com/in/joaquin-cardozo/'>
                <SiLinkedin />
            </a>
            <a className='icon' href='https://www.facebook.com/mikuxlyuuzaki/'>
                <SiFacebook />
            </a>
            <a className='icon' href='https://www.instagram.com/mlmaxi98/?hl=es-la'>
                <SiInstagram />
            </a>
        </div>
    </div>
}
export default Footer;

