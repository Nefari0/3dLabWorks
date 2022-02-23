import axios from 'axios'

const inititialState = {
    user: {},
    isLoggedIn:false,
    isLoading:false,
    loginError:false,
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const REGISTER_USER = 'REGISTER_USER'
const EDIT_USERINFO = 'EDIT_USERINFO'
const UPDATE_USER = 'UPDATE_USER'
const SHOW_DATA = 'SHOW_DATA'

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

export function showData(){
    const { user } = inititialState
    return {
        type: SHOW_DATA,
        payload:user
    }
}

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


export default function userReducer(state = inititialState, action) {
    switch (action.type) {
        case SHOW_DATA + 'FULFILLED':
            return {
                inititialState
            }
        case LOGIN_USER + '_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload.data, isLoggedIn: true, isLoading:false
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
            return { 
                ...state,
                isLoggedIn: false
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
        default:
            return state;
    }
}