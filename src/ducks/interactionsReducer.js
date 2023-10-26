const initialState = { 
    alert:''
}

const SET_ALERT = 'SET_ALERT'

export function setAlert(text) {
    return {
        type:SET_ALERT,
        payload:text
    }
}

export default function interactionsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALERT:
            return {
                ...state,
                alert:action.payload
            }
            default:
                return state;
    }
}