import axios from 'axios';
import * as API from './API'
import * as GET from './GET'

export const getGames = (search, genres, platforms, ordering, dates, page = 1, size = 15) => {
    let link = `${API.GAMES}&page=${page}&page_size=${size}`
    if (search) link += `&search=${search}`;
    if (genres) link += `&genres=${genres}`;
    if (platforms) link += `&platforms=${platforms}`;
    if (ordering) link += `&ordering=${ordering}`;
    if (dates) link += `&dates=${dates}`;
    console.log(link)
    return async (dispatch) => {

        const request = await axios.get(link)
        dispatch({
            type: GET.GAMES, payload: request.data.results
        })
        dispatch({
            type: GET.COUNT, payload: request.data.count
        })
    }
}
export const cleanGames = () => {
    return (dispatch) => {
        console.log('limpiando')
        dispatch({
            type: GET.GAMES, payload: []
        })
        dispatch({
            type: GET.COUNT, payload: 0
        })
    }
}
export const getGame = (id, flag) => {
    if (!flag) {

        return async (dispatch) => {
            const request = await axios.get(`${API.GAME}/${id}?key=${API.KEY}`)
            const screenshots = await axios.get(`${API.GAME}/${id}/screenshots?key=${API.KEY}`)
            console.log(request)
            dispatch({
                type: GET.GAME, payload: request.data
            })
            dispatch({
                type: GET.GAME_SCREENS, payload: screenshots.data.results
            })
        }
    }
    else {
        return dispatch => {
            console.log('limpiando')
            dispatch({ type: GET.GAME, payload: {} })
        }
    }
}

export const getGenres = () => {
    return async (dispatch) => {
        const request = await axios.get(`${API.GENRES}`)
        dispatch({
            type: GET.GENRES, payload: request.data.results
        })
        dispatch({
            type: GET.COUNT, payload: request.data.count
        })
    }
}
export const getGenre = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${API.GENRE}/${id}?key=${API.KEY}`)
        dispatch({
            type: GET.GENRE, payload: request.data
        })
    }
}


export const getPlatforms = () => {
    return async (dispatch) => {
        const request = await axios.get(`${API.PLATFORMS}`)
        dispatch({
            type: GET.PLATFORMS, payload: request.data.results
        })
        dispatch({
            type: GET.COUNT, payload: request.data.count
        })
    }
}
export const getPlatformDetails = (id) => {
    return async (dispatch) => {
        const request = await axios.get(`${API.PLATFORM}/${id}?key=${API.KEY}`)
        dispatch({
            type: GET.PLATFORM, payload: request.data
        })
    }
}