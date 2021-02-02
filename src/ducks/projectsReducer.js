// import axios from 'axios'

// const inititialState = {
//     projects:{}
// };

// const GET_PROJECTS = 'GET_PROJECTS'

// export function getProjects(){
//     return {
//         type: GET_PROJECTS,
//         payload: axios.get('/api/projects/all')
//     };
// }

// export default function projectsReducer(state = inititialState, action) {
//     switch (action.type) {
//         case GET_PROJECTS + "_FULFULLED":
//             return { ...state,
//                 projects: action.payload
//             };
//         default:
//             return state;
//     }
// }