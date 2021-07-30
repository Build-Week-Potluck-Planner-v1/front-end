import { 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 

    GET_POTLUCKS_SUCCESS, 
    GET_POTLUCKS_START,
    GET_POTLUCKS_ERROR,

    GET_FOODS_SUCCESS,

    GET_INVITES_SUCCESS, 
    GET_INVITES_START,
    GET_INVITES_ERROR,

    POST_INVITES_SUCCESS,

    POST_FOODS_SUCCESS,

    RSVP_SUCCESS,

    CREATE_POTLUCKS_SUCCESS,
    CREATE_POTLUCKS_ERROR,
} from '../actions/index'

export const initialState = {
    currentUser: {
        message: '',
        token: '',
        user: {
            id: 0,
            username: '',
        }
    },
    errors: '',
    loading: false,
    potlucks: [],
    invites: [],
    successMessage: '',
    foods: [],
    selectedFoods: [],
}

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            }
        case LOGIN_ERROR:
            return{
                ...state,
                errors: action.payload,
            }
        case GET_POTLUCKS_SUCCESS:
            return{
                ...state,
                potlucks: action.payload,
                loading: false,
            }
        case GET_POTLUCKS_START:
            return{
                ...state,
                loading: true,
            }
        case GET_POTLUCKS_ERROR:
            return{
                ...state,
                loading: false,
                errors: action.payload
            }
        case GET_INVITES_START:
            return{
                ...state,
                loading: true,
            }
        case GET_INVITES_SUCCESS:
            return{
                ...state,
                loading: false,
                invites: action.payload
            }
        case GET_INVITES_ERROR:
            return{
                ...state,
                loading: false,
                errors: action.payload,
            }
        case GET_FOODS_SUCCESS:
            return{
                ...state,
                loading: false,
                foods: action.payload,
            }
        case CREATE_POTLUCKS_SUCCESS:
            return{
                ...state,
                loading: false,
                successMessage: 'Your potluck has been created! Go back to the dashboard to see it.',
            }
         case CREATE_POTLUCKS_ERROR:
            return{
                ...state,
                loading: false,
                errors: action.payload,
            }
        case POST_INVITES_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case POST_FOODS_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case RSVP_SUCCESS:
            return{
                ...state,
                loading: false,
                successMessage: 'You have RSVPed',
            }
        default:
            return state;
    }
}