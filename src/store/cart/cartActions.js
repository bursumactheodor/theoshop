import {ADD_TO_CART} from'./cartConstants';
import {REMOVE_FROM_CART} from './cartConstants';

export function addToCart(payload){
    // payload = un obiect cu cheia product
    return{
        type:ADD_TO_CART,
        payload:payload
    }
}

export function removeFromCart(payload){
// payload = id
    return {
        type:REMOVE_FROM_CART,
        payload:payload
    }

}