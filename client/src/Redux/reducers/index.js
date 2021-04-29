import * as A from '../actions/consts'

const initialState = {
    games: [],
    gameDetail: {},
    genres: [],
    genreDetail: {},
    platforms: [],
    platformDetail: {},
    dark: true,
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case A.GET_GAMES: {
            return {
                ...state,
                games: action.payload
            }
        }

        case A.GET_GAME_DETAILS: {
            return {
                ...state,
                gameDetail: action.payload
            }
        }
        case A.GET_GENRES: {
            return {
                ...state,
                genres: action.payload
            }
        }
        case A.GET_GENRE_DETAILS: {
            return {
                ...state,
                genreDetail: action.payload
            }
        }

        case A.GET_PLATFORMS: {
            return {
                ...state,
                platforms: action.payload
            }
        }
        case A.GET_PLATFORM_DETAILS: {
            return {
                ...state,
                platforms: action.payload
            }
        }

        case A.SET_DARK:
            return {
                ...state,
                dark: action.payload,
            };

        default: return state
    }
}
export default rootReducer;