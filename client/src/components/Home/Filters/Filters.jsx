import React, { useEffect, useState } from 'react'
import styles from './Filters.module.scss'
import { getGames, cleanGames } from "../../../Redux/actions/index";
import { useDispatch } from 'react-redux';
const Filters = (props) => {
    const dispatch = useDispatch();

    const [ordering, setOrdering] = useState('')
    useEffect(() => {
        dispatch(cleanGames)    
        dispatch(
            getGames(
                "", //nombre
                "", //buscar por géneros
                "", //filtrar por plataformas
                ordering, //ordenar de diferentes formas
                "", //ordenar de diferentes formas
                1, //paginado
                null //cantidad de resultados
            )
        );
        //dispatch(getGenres())
        //dispatch(getPlatforms())
    }, [dispatch, ordering]);
    return (
        <div className={props.dark ? styles.containerDark : styles.container}>
            <div>
                <span>All Games</span>
                <select value={ordering} onChange={(e) => { setOrdering(e.target.value) }} >
                    <option value=""></option>
                    <option value="name"> Name </option>
                    <option value="released"> Released </option>
                    <option value="added"> Added </option>
                    <option value="rating">Rating </option>
                </select>

            </div>

        </div>
    )
}

export default Filters
