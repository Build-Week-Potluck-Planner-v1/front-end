 import axios from "axios"
 import axiosWithAuth from '../../utils/axiosWithAuth';

 export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 export const LOGIN_ERROR = "LOGIN_ERROR";

 export const GET_POTLUCKS_START = "GET_POTLUCKS_START";
 export const GET_POTLUCKS_SUCCESS = "GET_POTLUCKS_SUCCESS";
 export const GET_POTLUCKS_ERROR = "GET_POTLUCKS_ERROR";

 export const CREATE_POTLUCKS_SUCCESS = "CREATE_POTLUCKS_SUCCESS";
 export const CREATE_POTLUCKS_ERROR = "CREATE_POTLUCKS_ERROR";

 export const handleLogin = (user) => (dispatch) => {
    axios.post('https://ft-potluck-planner-7-server.herokuapp.com/api/auth/login', user)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.token)
        })
        .catch(err => {
            dispatch({type: LOGIN_ERROR, payload: err})
        })
    }

export const getPotlucks = () => (dispatch) => {
    dispatch({ type: GET_POTLUCKS_START})

    return axiosWithAuth()
        .get('https://ft-potluck-planner-7-server.herokuapp.com/api/potlucks')
            .then(res => {
                dispatch({type: GET_POTLUCKS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: GET_POTLUCKS_ERROR, payload: err})
            })
}
export const createPotluck = (potluck) => (dispatch) => {
        axiosWithAuth()
        .post('https://ft-potluck-planner-7-server.herokuapp.com/api/potlucks', potluck)
            .then(res => {
                dispatch({type: CREATE_POTLUCKS_SUCCESS})
            })
            .catch(err => {
                dispatch({type: CREATE_POTLUCKS_ERROR, payload: err})
            })
}