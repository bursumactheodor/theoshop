export function addToFavorites(payload){
    // payload = un obiect cu cheia product
    
    return{
        type:'ADD_TO_FAVORITES',
        payload:payload
    }
}

export function removeFromFavorites(payload){
// payload = id
    return {
        type:'REMOVE_FROM_FAVORITES',
        payload:payload
    }

}
// export function addRemoveFavorites(payload){   
    
//     if(payload.opt){
//         //console.log(opt);
//         return removeFromFavorites(payload.product.id);     
//     }
       
//     else
//     {
//        // console.log(opt);
//         return addToFavorites(payload.product);    
//     }
       
// }