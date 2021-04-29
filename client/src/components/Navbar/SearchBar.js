import React, {useState} from 'react'
import '../styles/SearchBar.css'
//import Menu from '../images/menu.jpg'

function SearchBar(){

    const [game, setGame] = useState("");
    const handleSubmit= (event) => {
        event.preventDefault();
        alert(game);
      }
      const handleChange= (event) => {
        setGame(event.target.value)
      }
  return (
    <form onSubmit={handleSubmit} className ='buscar'>
      <input
        type="text"
        placeholder="Buscar Juego..."
        value = {game}
        onChange={handleChange}
        className="busqueda"
      />
      <input type="submit" value="Buscar" className="boton" />
    </form>
    )
}
export default SearchBar