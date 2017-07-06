import {LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST, LOGOUT, USER_DETAILS_RECEIVED} from '../constants'
import InitialState from '../initial'

export default (state = InitialState.user, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                user_name: action.username,
                auth_token: action.auth_token,
                action: action.type
            }
        case LOGIN_FAILED:
            return {
                ...state,
                user_name: null,
                auth_token: null,
                authenticated: false,
                action: action.type
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                action: action.type
            }
        case USER_DETAILS_RECEIVED:
            return {
                ...state,
                action: action.type,
                image: action.image,
                actions: action.actions,
                email: action.email
            }
        case LOGOUT:
            return InitialState.user
        default:
            return state
    }
}