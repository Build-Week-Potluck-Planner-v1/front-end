 import axios from "axios"
 export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
 export const LOGIN_ERROR = "LOGIN_ERROR";

 export const handleLogin = (user) => (dispatch) => {
    axios.post('https://ft-potluck-planner-7-server.herokuapp.com/api/auth/login', user)
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({type: LOGIN_ERROR, payload: err})
        })
    }