import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Home.css'
import Loader from 'react-loader-spinner';
import { NavLink } from 'react-router-dom'
import { getGames, getGenres, getPlatforms } from '../../Redux/actions/index'
import Cards from './Cards/Cards';
import Slider from './Slider/Slider';
function Home(props) {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [genre, setGenre] = useState('');
    const [order, setOrder] = useState('');
    const [rating, setRating] = useState('');
    const [name, setName] = useState('');

    const games = useSelector(state => state.games)
    const genres = useSelector(state => state.genres)
    const platforms = useSelector(state => state.platforms)



    useEffect(() => {

        dispatch(getGames())
        dispatch(getGenres())
        dispatch(getPlatforms())

    }, [dispatch])

    useEffect(() => {
        if (games && genres && platforms) {
            console.log('Juegos Cargados!')
        }
    }, [games, genres, platforms])



    return (
        <div className='container-Home'>
            {games && genres && platforms ?
                <>
                    <div className='genres'>
                        <Slider genres={games} />
                    </div>
                    <div className='genres'>
                        <Slider genres={genres} />
                    </div>
                    <div className='platforms'>
                        <Slider genres={platforms} />
                    </div>
                </>
                :
                <div className="spinner">
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                </div>
            }
        </div>
    )
}


export default Home;
