import axios from 'axios'

const inititialState = {
    projects:[],
    isloading:true,
};

const GET_PROJECTS = "GET_PROJECTS";

export function getProjects() {
    return {
        type: GET_PROJECTS,
        payload: axios.get('/api/projects/all')
    };
}

export default function projectsReducer(state = inititialState, action) {
    switch (action.type) {
        case GET_PROJECTS + '_PENDING':
            return { ...state, isloading: true }
        case GET_PROJECTS + "_FULFULLED":
            return { 
                ...state,
                isloading: false,
                projects: action.payload.data
            };
            case GET_PROJECTS + '_REJECTED':
                return {
                    ...state, isloading: false
                }
        default:
            return state;
    }
}