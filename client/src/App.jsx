import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
//import Genre from './components/Details/Genre/Genre'
import Footer from './components/Footer/Footer.jsx'
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Videogame from './components/Details/Videogame/Videogame.jsx'
import styles from './App.scss'
const App = () => {

  return (
    <div className={styles.container}>
      <Route exact path='/' component={LandingPage}></Route>
      <Route path='/home' component={Navbar}></Route>
      <Route exact path='/home/' component={Home}></Route>
      {/* <Route exact path='/home/genre/:id' component={Genre}></Route> */}
      <Route exact path='/home/videogame/:id' component={Videogame}></Route>
      <Route path='/home' component={Footer}></Route>
    </div>
  );
}


export default App;
