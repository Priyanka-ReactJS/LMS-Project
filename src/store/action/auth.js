import * as actionType from './type';
import axios from 'axios';

export const auth = (credentials , isSignUp) => {
    console.log('cradentials...', credentials)
   let  url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_PKpzYYATWgHifK5-Wm7Zd5miU1_30tI' 
     
    if (isSignUp){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_PKpzYYATWgHifK5-Wm7Zd5miU1_30tI'

    } else {
        credentials = {...credentials, returnSecureToken: true}
    }
   
    return dispatch =>{
        dispatch(authStart());
        axios.post(url,
        credentials).then(response => {
            console.log('auth response' ,response);
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('userId',response.data.localId);
            localStorage.setItem('expirationDate',new Date(new Date().getTime() + response.data.expiresIn * 1000));

            dispatch(authSuccess(response.data)); 
        }).catch(error => {
            console.log("auth error" , error);
            dispatch(authFailure())
        })
        dispatch(authStart());
    }
}
export const authStart = () => {
    return {type: actionType.AUTH_SAVE_START}
}
export const authSuccess = (authData) => {
    return {type: actionType.AUTH_SAVE_SUCCESS , value : authData}
}
export const authFailure = () => {
    return {type: actionType.AUTH_SAVE_FAILURE}
}