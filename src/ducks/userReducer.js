import axios from 'axios'

const inititialState = {
    user: {},
    isLoggedIn:false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const REGISTER_USER = 'REGISTER_USER'

export function loginUser(user_name, password) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {user_name, password})
    };
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

export function registerUser(user_name, password, email, first_name, is_admin){
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', { user_name, password, email, first_name, is_admin})
    }
}

export default function userReducer(state = inititialState, action) {
    switch (action.type) {
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload.data, isLoggedIn: true
            }
        case LOGOUT_USER + '_FULFILLED':
                return {
                    ...state, isLoggedIn: false
                }
        case REGISTER_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload.data, isLoggedIn: true
            }
        case REGISTER_USER + '_REJECTED':
            return { ...state, isLoggedIn: false}
        default:
            return state;
    }
}