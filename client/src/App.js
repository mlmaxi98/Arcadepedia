import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home.jsx'
import Genre from './components/Details/Genre/Genre'
import Footer from './components/Footer/Footer'
import LandingPage from './components/LandingPage/LandingPage'
import './styles/App.css'
import Videogame from './components/Details/Videogame/Videogame'
import { useSelector } from 'react-redux'
function App(props) {
  const dark = useSelector((state) => state.dark);
  return (
    <div className='background'>
      <Route exact path='/' render={() => <LandingPage dark={dark} />} />
      <Route path='/home' render={() => <Navbar dark={dark} />} />
      <Route exact path='/home/' render={() => <Home dark={dark} />} />
      <Route exact path='/home/genre/:id' render={({ match }) => <Genre dark={dark} id={match.params.id} />} />
      <Route exact path='/home/videogame/:id' render={({ match }) => <Videogame dark={dark} id={match.params.id} />} />
      <Route path='/home' component={Footer}></Route>
    </div>
  );
}


export default App;
