import React from 'react'
import { NavLink } from 'react-router-dom'
//import { connect } from "react-redux";
import './LandingPage.css'
function LandingPage() {

    return (
        <div className='containerLP'>
            <span>PROYECTO INDIVIDUAL</span>
            <div className='div-title'>
                <h1>VIDEOJUEGOS</h1>
            </div>
            <div className='div-btn'>
                <NavLink to={'/home'}>
                    {<button className='btnLP' type='submit'>START</button>}
                </NavLink>
            </div>
        </div>
    )
}
export default LandingPage;