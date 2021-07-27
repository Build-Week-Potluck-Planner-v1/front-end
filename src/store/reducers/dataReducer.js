import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from '../actions/index'

export const initialState = {
    currentUser: {
        auth_code: null,
        password: '',
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
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case SIGN_UP_ERROR:
            return {
                ...state,
                errprs: action.payload
            }
        default:
            return state;
    }
}