import * as GET from '../actions/GET'

const initialState = {
    games: [],
    game: {},
    genres: [],
    genre: {},
    platforms: [],
    platform: {},
    dark: false,
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET.GAMES: {
            return {
                ...state,
                games: action.payload
            }
        }

        case GET.GAME: {
            return {
                ...state,
                game: action.payload
            }
        }
        case GET.GENRES: {
            return {
                ...state,
                genres: action.payload
            }
        }
        case GET.GENRE: {
            return {
                ...state,
                genre: action.payload
            }
        }

        case GET.PLATFORMS: {
            return {
                ...state,
                platforms: action.payload
            }
        }
        case GET.PLATFORM: {
            return {
                ...state,
                platform: action.payload
            }
        }

        case GET.DARK:
            return {
                ...state,
                dark: action.payload,
            };

        default: return state
    }
}
export default rootReducer;