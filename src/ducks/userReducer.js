import axios from 'axios'
import { OPEN } from 'ws'

const inititialState = {
    user: {},
    isLoggedIn:false,
    isLoading:false,
    loginError:false,
    
    //  testing use of boolean data types in redux
    loginOpen:false,
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const REGISTER_USER = 'REGISTER_USER'
const EDIT_USERINFO = 'EDIT_USERINFO'
const UPDATE_USER = 'UPDATE_USER'
const SHOW_DATA = 'SHOW_DATA'
const AUTO_LOGIN = 'AUTO_LOGIN'
const OPEN_LOGIN = 'OPEN_LOGIN'

export function remoteLogin(val) {
    return {
        type: OPEN_LOGIN,
        payload: val
    }
}

export function loginUser(user_name, password, last_visit, visited) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {user_name, password, last_visit, visited})
    };
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}

export function registerUser(user_name, password, email, first_name, is_admin, is_sudo){
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', { user_name, password, email, first_name, is_admin, is_sudo})
    }
}

// export function showData(user){
//     return {
//         type: SHOW_DATA,
//         payload:axios.post('/auth/getInfo', {user})
//     }
// }

// --- this block adds edit capabilities to user info --- //
export function editUserinfo(photo_url){
    return {
        type: EDIT_USERINFO,
        payload: axios.get('api/users/all')
    }
}

//  ----- rebuilding - commented out for testing------ //
// export function updateUser(user_id){
//     return{
//         type: UPDATE_USER,
//         payload: axios.get(`/api/users/:${user_id}`)
//     }
// }
export function updateUser(user){
    return{
        type: UPDATE_USER,
        payload: user
    }
}
// ---------------------------------------------------- //

// --- auto login from browser if usersession is saved --- //
export function autoLogin(user_name, last_visit, visited){
    return{
        type: AUTO_LOGIN,
        payload: axios.post('/auth/browser/login', {user_name,last_visit,visited})
    }
}

export default function userReducer(state = inititialState, action) {
    switch (action.type) {
        // ---- this allows the login menu to be opened from any component ---- //
        case OPEN_LOGIN:
            return {
                ...state,
                loginOpen:action.payload
            }
        // -------------------------------------------------------------------- //
        case SHOW_DATA + '_PENDING':
            return {
                ...state,
                isLoading:true
            }
        case SHOW_DATA + '_FULFILLED':
            return {
                ...state,
                user:action.payload.data
            }
        case SHOW_DATA + '_REJECTED':
            return {
                ...state,
                isLoading:false,
                loginError:true
            }
        case LOGIN_USER + '_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload.data, isLoggedIn: true, isLoading:false,
            }
        case LOGIN_USER + '_REJECTED':
            alert('Your username or password is incorrect')
            return {
                ...state,
                loginError:true,isLoading:false
            }
        case LOGOUT_USER + '_FULFILLED':
                return {
                    ...state, user: action.payload.data, isLoggedIn: false
                }
        case REGISTER_USER + '_PENDING':
                return {
                    ...state,
                    isLoading: true
                }
        case REGISTER_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload.data, isLoggedIn: true, isLoading:false
            }
        case REGISTER_USER + '_REJECTED':
            alert('Either the username you have chosen is already being used or consists of more than 12 characters. Please choose a defferent username')
            return { 
                ...state,
                isLoggedIn: false,
                isLoading:false
            }
        case UPDATE_USER + '_FULFILLED':
            return {
                ...state,
                user:action.payload.data, isLoggedIn:true
            }            
        case UPDATE_USER + '_REJECTED':
            return {
                ...state,
                isLoggedIn: false
            }
            // --- auto login --- //
            case AUTO_LOGIN + '_PENDING':
                return {
                    ...state,
                    isLoading: true
                }
            case AUTO_LOGIN + '_FULFILLED':
                return {
                    ...state,
                    user: action.payload.data, isLoggedIn: true, isLoading:false
                }
            case AUTO_LOGIN + '_REJECTED':
                // alert('Cannot auto login: Your username or password is incorrect')
                return {
                    ...state,
                    loginError:true, isLoading:false
                }
        default:
            return state;
    }
}