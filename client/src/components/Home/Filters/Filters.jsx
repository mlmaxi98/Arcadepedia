import React, { useEffect, useState } from 'react'
import styles from './Filters.module.scss'
import { getGames, cleanGames } from "../../../Redux/actions/index";
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
const Filters = (props) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    const [genres, setGenres] = useState('')
    const [ordering, setOrdering] = useState('')
    const [page, setPage] = useState(1)
    const nextPage = () => { setPage(page + 1) }
    const prevPage = () => { page > 1 && setPage(page - 1) }
    const handleText = (e) => { setText(e.target.value) }
    const handleSearch = () => { setSearch(text) }


    useEffect(() => {
        dispatch(cleanGames())
        dispatch(
            getGames(
                search, //nombre
                "", //buscar por géneros
                "", //filtrar por plataformas
                ordering, //ordenar de diferentes formas
                "", //ordenar de diferentes formas
                page, //paginado
                null //cantidad de resultados
            )
        );
        //dispatch(getGenres())
        //dispatch(getPlatforms())
    }, [dispatch, search, ordering, page]);
    return (
        <div className={props.dark ? styles.containerDark : styles.container}>
            <div className={styles.filters}>
                <span>All Games</span>

                <select value={ordering} onChange={(e) => { setOrdering(`-${e.target.value}`) }} >
                    <option value=""></option>
                    <option value="name"> Name</option>
                    <option value="released"> Released</option>
                    <option value="added"> Added</option>
                    <option value="created"> Created</option>
                    <option value="updated"> Updated</option>
                    <option value="rating"> Rating</option>
                    <option value="metacritic"> Metacritic</option>
                </select>
                {/* <select value={ordering} onChange={(e) => { setOrdering(e.target.value) }} >
                    <option value=""></option>
                    <option value="name"> Name </option>
                    <option value="released"> Released </option>
                    <option value="added"> Added </option>
                    <option value="rating">Rating </option>
                </select> */}

                {/* <button onClick={setOrdering(`-${ordering}`)} ></button> */}
                <div className={styles.search}>
                    <input type='search' value={text} onChange={handleText} />
                    <button onClick={handleSearch}> <SearchIcon style={{ fontSize: '1.5rem' }} /> </button>
                </div>
            </div>
            <div className={styles.pages}>
                <button onClick={prevPage}>
                    Prev
                </button>
                <button onClick={nextPage}>
                    Next
                </button>
            </div>

        </div>
    )
}

export default Filters
