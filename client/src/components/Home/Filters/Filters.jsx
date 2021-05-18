import React, { useEffect, useState } from 'react'
import { getGames, cleanGames } from "../../../Redux/actions/index";
import { useDispatch, useSelector } from 'react-redux';
import { genres } from './Consts'
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from './Filters.module.scss'
const Filters = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('')
    const [ordering, setOrdering] = useState('')
    const [page, setPage] = useState(1)
    const nextPage = () => {
        Math.ceil(count / 12) > page && setPage(page + 1)
    }
    const prevPage = () => {
        page > 1 && setPage(page - 1)
    }
    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleSearch = () => {
        setSearch(text)
    }

    useEffect(() => {
        dispatch(cleanGames())
        dispatch(
            getGames(
                search, //nombre
                genre, //buscar por géneros
                '', //filtrar por plataformas
                ordering, //ordenar de diferentes formas
                '', //buscar por fecha
                page, //paginado
                12 //cantidad de resultados
            )
        );
    }, [dispatch, search, ordering, genre, page]);
    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.title}>
                    <span>Arcadepedia</span>
                </div>
                <div className={styles.filter}>
                    <div className={styles.games}>
                        <div className={styles.search}>
                            <input type="search" value={text} onChange={handleText} placeholder="Search..." />
                            <button onClick={handleSearch}> <SearchIcon style={{ fontSize: "1.5rem" }} /> </button>
                        </div>
                        <div className={styles.pages}>
                            <button onClick={prevPage}> <ArrowBackIcon /> </button>
                            <input type='text' value={page} disabled />
                            <button onClick={nextPage}> <ArrowForwardIcon /> </button>
                        </div>
                    </div>
                    <div className={styles.selects}>
                        <select
                            value={ordering}
                            onChange={(e) => { setOrdering(e.target.value) }}
                        >
                            <option value="">Order by...</option>
                            <option value="name"> Name ↑</option>
                            <option value="-name"> Name ↓</option>
                            <option value="released"> Released ↑</option>
                            <option value="-released"> Released ↓</option>
                            <option value="created"> Created ↑ </option>
                            <option value="-created"> Created ↓</option>
                            <option value="rating"> Rating ↑</option>
                            <option value="-rating"> Rating ↓</option>
                            <option value="metacritic"> Metacritic ↑</option>
                            <option value="-metacritic"> Metacritic ↓</option>
                        </select>
                        <select
                            value={genre}
                            onChange={(e) => { setGenre(e.target.value) }}
                        >
                            <option value="">Filter by...</option>
                            {
                                genres.map(genre => <option value={genre.id}>{genre.name}</option>)
                            }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
