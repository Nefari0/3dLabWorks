const initialState = {
    isLoading:false
}

const IS_LOADING = "IS_LOADING"

export function isLoading(value) {
    return {
        type:IS_LOADING,
        payload:value
    }
}

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading:action.payload
            }
    default:
        return state;
    }
}