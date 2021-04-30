import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGenre } from '../../../Redux/actions/index'
import styles from './Genre.module.scss'
import Loader from 'react-loader-spinner';
const Genre = (props) => {
    const dispatch = useDispatch();
    const id = props.id;
    const genre = useSelector(state => state.genreDetail)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(false)
        dispatch(getGenre(id))
    }, [dispatch, id])

    /* useEffect(() => {
        if (genre) {
            setLoading(true)
        }
    }, [genre]) */

    return (

        <div className={props.dark ? styles.containerDark : styles.container}>

            {!genre ?
                <div className="spinner">
                    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
                </div>
                :
                <div>
                    <div className={styles.name}>
                        <span>{genre?.name}</span>
                    </div>
                    <div className={styles.description}>
                        <p>{genre.description?.replace(/(<([^>]+)>)/ig, '')}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Genre
