import React from 'react'
import Loader from 'react-loader-spinner';
import styles from './Loading.module.scss'
const Loading = () => {
    return (
        <div className={styles.container}>
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default Loading
