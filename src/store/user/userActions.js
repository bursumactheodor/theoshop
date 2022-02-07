import {signInWithGoogle, signOutFromGoogle} from '../../apis/firebase';
import {signInWithFacebook,signOutFromFacebook} from '../../apis/firebase'

import {START_LOADING} from './userConstants';
import {UPDATE_USER_DATA} from './userConstants';
import {UPDATE_ERROR} from './userConstants';
import {UPDATE_SIGN_IN_FACEBOOK} from './userConstants';
import {UPDATE_SIGN_IN_GOOGLE} from './userConstants';

export function startLoading(){
    
    return{
        type:START_LOADING    
    };
}

export function updateUserData(payload){
    
    return{
        type:UPDATE_USER_DATA,
        payload:payload
    };
}
export function updateEror(payload){
    
    return{
        type:UPDATE_ERROR,
        payload:payload
    };
}

export function updateSignInFacebook(payload){
    
    return{
        type:UPDATE_SIGN_IN_FACEBOOK,
        payload:payload      
    };
}
export function updateSignInGoogle(payload){
    
    return{
        type:UPDATE_SIGN_IN_GOOGLE,
        payload:payload       
    };
}


export function loginUserGoogle() {
    return (dispatch) => {
            dispatch (startLoading() );

            signInWithGoogle().then((result)=> {
                const payload = result.user;
                dispatch(updateUserData(payload));
                dispatch(updateSignInGoogle(true) );
                           }).catch((error)=>{
                                dispatch(updateEror(error));
                            });
    }
}

export function logOutUserGoogle(){
    return (dispatch) => {
        dispatch (startLoading() );

        signOutFromGoogle().then((result)=> {
            //const payload = result.user; // poate e null
            dispatch(updateUserData(null));
            dispatch(updateSignInGoogle(false));
        }).catch((error)=>{
            dispatch(updateEror(error));
        })

    }
}

export function loginUserFacebook() {
    return (dispatch) => {
            dispatch (startLoading() );

            signInWithFacebook().then((result)=> {
                const payload = result.user;
                dispatch(updateUserData(payload));
                dispatch(updateSignInFacebook(true) );
                           }).catch((error)=>{
                                dispatch(updateEror(error));
                            });
    }
}

export function logOutUserFacebook(){
    return (dispatch) => {
        dispatch (startLoading() );

        signOutFromFacebook().then((result)=> {
            //const payload = result.user; // poate e null
            dispatch(updateUserData(null));
            dispatch(updateSignInFacebook(false));
        }).catch((error)=>{
            dispatch(updateEror(error));
        })

    }
}