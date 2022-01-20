import {signInWithGoogle, signOutFromGoogle} from '../../apis/firebase';


export function startLoading(){
    
    return{
        type:'START_LOADING'      
    };
}

export function updateUserData(payload){
    
    return{
        type:'UPDATE_USER_DATA',
        payload:payload
    };
}
export function updateEror(payload){
    
    return{
        type:'UPDATE_ERROR',
        payload:payload
    };
}

export function loginUser() {
    return (dispatch) => {
            dispatch (startLoading() );

            signInWithGoogle().then((result)=> {
                const payload = result.user;
                dispatch(updateUserData(payload));
                           }).catch((error)=>{
                                dispatch(updateEror(error));
                            });
    }
}

export function logOutUser(){
    return (dispatch) => {
        dispatch (startLoading() );

        signOutFromGoogle().then((result)=> {
            //const payload = result.user; // poate e null

            dispatch(updateUserData(null));
        }).catch((error)=>{
            dispatch(updateEror(error));
        })

    }
}