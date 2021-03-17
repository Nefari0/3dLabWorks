import axios from "axios";

const initialState = {
  models: [],
  featured:[],
  // models: {}
  isloading: false,
};

const GET_MODELS = "GET_MODELS";
const GET_FEATURED = "GET_FEATURED";

export function getModels() {
  return {
    type: GET_MODELS,
    // payload: axios.get("https://www.breakingbadapi.com/api/characters")
    payload: axios.get('/api/projects/all')
  };
}

// export function getFeatured() {
//   return {
//       type : GET_FEATURED,
//       payload: axios.get('api/projects/featured')
//   };
  
// }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MODELS + "_PENDING":
      return {
        ...state,
        isloading: true,
      }
    case GET_MODELS + "_FULFILLED":
      return {
        ...state,
        isloading: false,
        models: action.payload
      };
    case GET_MODELS + "_REJECTED":
      return {
        ...state,
        isloading: false
      }
    // case GET_FEATURED + "_PENDING":
    //   return {
    //     ...state,
    //     isloading:true,
    //   }
    // case GET_FEATURED + "_FULLFILED":
    //   return {
    //     ...state,
    //     featured: action.payload
    //   }
    // case GET_FEATURED + "_REJECTED":
    //   return {
    //     ...state,
    //     isloading:false
    //   }
    default:
      return state;
  }
}