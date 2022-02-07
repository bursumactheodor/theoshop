import {START_LOADING} from './userConstants';
import {UPDATE_USER_DATA} from './userConstants';
import {UPDATE_ERROR} from './userConstants';
import {UPDATE_SIGN_IN_FACEBOOK} from './userConstants';
import {UPDATE_SIGN_IN_GOOGLE} from './userConstants';

const initialState={
    data:null,
    loading:false,
    error:null,
    signInFacebook:false,
    signInGoogle:false
};

export function userReducer(state = initialState, actionData){
    switch (actionData.type)
    {
        case START_LOADING :
            return {
                    ...state, 
                    loading:true
                   };
        case UPDATE_USER_DATA :
            return{
                    ...state,
                    data:actionData.payload,
                    loading:false                  
            } 
            
        case UPDATE_SIGN_IN_GOOGLE :
            return {
                ...state,
                signInGoogle:actionData.payload
                

            }
        case UPDATE_SIGN_IN_FACEBOOK:
            return {
                ...state,
                signInFacebook:actionData.payload

            }
        
        case UPDATE_ERROR :
            return{
                    ...state,
                    error:actionData.payload

            }          
        default: 
             return state;
    }
}