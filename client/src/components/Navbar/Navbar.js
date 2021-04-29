import React from 'react'
import './Navbar.css'
import Logo from '../../images/logo2.png'
import { NavLink } from 'react-router-dom'
//import SearchBar from './SearchBar'
function Navbar() {

    return <div className='container-nav'>

        <nav className='menu'>
            <div className='divLogo'>
                <NavLink to={'/home'}>
                    <img className='logo' src={Logo} alt='logo'></img>
                </NavLink>
            </div>

            <ul className='enlaces'>
                <li>
                    <NavLink to={'/home'}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={'/home/crear'}>CREAR</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>SALIR</NavLink>
                </li>
            </ul>
        </nav>
        <hr className ='navHr'></hr>
    </div>
}

export default Navbar