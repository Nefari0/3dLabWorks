import axios from 'axios'
// import { initializeApp } from 'firebase-admin';
// import { useReducer } from 'react';
// import reducer from './breakingBadReducer';

const inititialState = {
    user: {},
    isLoggedIn:false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER= 'LOGOUT_USER'

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

export default function userReducer(state = inititialState, action) {
    switch (action.type) {
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
                user: action.payload, isLoggedIn: true
            }
        case LOGOUT_USER + '_FULFILLED':
                return inititialState
            default:
                return state;
    }
}