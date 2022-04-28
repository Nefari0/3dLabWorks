import axios from 'axios'
import {app} from '../base'
const db = app.firestore()

const inititialState = {
    isLoading:false,
    url:{},
    error:false
}

const DELETE_FILE = 'DELETE_FILE'
const ADD_TO_FIREBASE = 'ADD_TO_FIREBASE'
const REF_FROM_URL = 'REF_FROM_URL'

export const getRefFromUrl = (url) => {
    const ref = app.storage().refFromURL(url).fullPath.split('/').slice(0, -1).join('/')
    return {
        type:REF_FROM_URL,
        payload:ref
    }
}

export const deleteFile = (url) => {
    const storageRef = app.storage().refFromURL(url)
    return {
        type: DELETE_FILE,
        payload:storageRef.delete().then(function deleted(params) {})
    }
}

export const addNewModel = (file,path) => {
    // create ref
    const ref = app.storage().ref(path).child(file.name).put(file) // example path: `madmodels/projects/${id}/`
    return {
        type:ADD_TO_FIREBASE,
        payload: ref
    }
}

export default function firebaseReducer(state = inititialState, action) {
    switch(action.type) {
        case REF_FROM_URL+ '_PENDING':
            return {
                ...state,
                isLoading:true
            }
        case REF_FROM_URL + '_FULFILLED':
            return {
                ...state,
                isLoading:false,
                url:action.payload
            }
        case REF_FROM_URL + '_REJECTED':
            return {
                ...state,
                isLoading:false,
                error:true,
            }
        // -- delete image -- //
        case DELETE_FILE + '_PENDING':
            return {
                ...state,
                isLoading:true
            }
        case DELETE_FILE + '_FULFILLED':
            return {
                ...state,
                isLoading:false
            }
        case DELETE_FILE + '_REJECTED':
            return {
                ...state,
                isLoading:false,
                error:true
            }
        // --- add file --- //
        case ADD_TO_FIREBASE + '_PENDING':
            return {
                ...state,
                isLoading:true
            }
        case ADD_TO_FIREBASE + '_FULFILLED':
            return {
                ...state,
                isLoading:false,
                url:action.payload
            }
        case ADD_TO_FIREBASE + '_REJECTED':
            return {
                ...state,
                isLoading:false,
                error:true
            }            
        default:
            return state;
    }
}