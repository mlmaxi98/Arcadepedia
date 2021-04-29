import axios from 'axios';
import * as A from './consts'

export const getGames = () => {
    return async (dispatch) => {
        const request = await axios.get(`${A.API_GAME}?key=${A.API_KEY}`)
        dispatch({
            type: A.GET_GAMES, payload: request.data.results
        })
    }
}
export const getGameDetails = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${A.API_GAME}/${id}?key=${A.API_KEY}`)
        dispatch({
            type: A.GET_GAME_DETAILS, payload: request.data
        })
    }
}
export const getGenres = () => {
    return async (dispatch) => {
        const request = await axios.get(`${A.API_GENRE}?key=${A.API_KEY}`)
        dispatch({
            type: A.GET_GENRES, payload: request.data.results
        })
    }
}
export const getGenreDetail = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${A.API_GENRE}/${id}?key=${A.API_KEY}`)
        dispatch({
            type: A.GET_GENRE_DETAILS, payload: request.data
        })
    }
}

export const getPlatforms = () => {
    return async (dispatch) => {
        const request = await axios.get(`${A.API_PLATFORM}?key=${A.API_KEY}`)
        dispatch({
            type: A.GET_PLATFORMS, payload: request.data.results
        })
    }
}
export const getPlatformDetails = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${A.API_PLATFORM}/${id}?key=${A.API_KEY}`)
        dispatch({
            type: A.GET_PLATFORM_DETAILS, payload: request.data
        })
    }
}
export const setDarkMode = (dark) => {
    return function (dispatch) {
        dispatch({
            type: A.SET_DARK,
            payload: dark,
        });
    };
};
