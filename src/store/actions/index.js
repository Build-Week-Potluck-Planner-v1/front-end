 import axios from "axios"
 export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
 export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

 export const postAccount = (newUser) => (dispatch) => {
    axios.post('https://ft-potluck-planner-7-server.herokuapp.com/api/auth/register', newUser)
        .then(res => {
            dispatch({type: SIGN_UP_SUCCESS})
        })
        .catch(err => {
            dispatch({type: SIGN_UP_ERROR})
        })
    }