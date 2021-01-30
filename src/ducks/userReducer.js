import axios from 'axios'
// import { initializeApp } from 'firebase-admin';
// import { useReducer } from 'react';
// import reducer from './breakingBadReducer';

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

export function registerUser(user_name, password, email, first_name){
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', { user_name, password, email, first_name})
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
                return {
                    inititialState
                }
        case REGISTER_USER + '_FULFILLED':
            console.log('PAYLOAD of here',action.payload)
            return {
                ...state,
                user: action.payload, isLoggedIn: true
            }
        case REGISTER_USER + '_REGECTED':
            return { ...state, isLoggedIn: false}
        default:
            return state;
    }
}