import {ADD_TO_FAVORITES} from './favoritesConstants';
import {REMOVE_FROM_FAVORITES} from './favoritesConstants';

export function addToFavorites(payload){
    // payload = un obiect cu cheia product
    
    return{
        type:ADD_TO_FAVORITES,
        payload:payload
    }
}

export function removeFromFavorites(payload){
// payload = id
    return {
        type:REMOVE_FROM_FAVORITES,
        payload:payload
    }

}
