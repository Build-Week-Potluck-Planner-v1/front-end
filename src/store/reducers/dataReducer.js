import { LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/index'

export const initialState = {
    currentUser: {
        auth_code: null,
        id: 0,
        username: '',
    },
    errors: '',
    loading: false,

    // currentUsersPotlucks: [],
    // potluck: {
    //     id: 0,
    //     foods: [],
    //     date: '',
    // },
    // foods: [],
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
            }
        case LOGIN_ERROR:
            return{
                ...state,
                errors: action.payload,
            }
        default:
            return state;
    }
}