import {ADD_TO_FAVORITES} from './favoritesConstants';
import {REMOVE_FROM_FAVORITES} from './favoritesConstants';

const initialState={
    products:[]
};
/*
 function deleteProducts(state,actionData){
     return state.products.filter(elem => elem.id !== actionData.payload);
 }

function deleteOneByOneProducts(state,actionData){
   const result=[];
   const firstIdx = state.products.findIndex(elem => elem.id === actionData.payload);
   state.products.forEach((elem,index) => {

        if(index !== firstIdx)
            result.push(elem);
   })
   return result;
}
*/
export function favoritesReducer(state = initialState,actionData)
{
   switch (actionData.type)
   {
       case ADD_TO_FAVORITES:
           return {
                   ...state, 
                   products: [
                       ...state.products,
                       actionData.payload.product
                   ]
                  };
       case REMOVE_FROM_FAVORITES:
       return {
               ...state, 
               products: state.products.filter(elem => elem.id !== actionData.payload)
              //products: deleteProducts(state,actionData)
              // products:deleteOneByOneProducts(state,actionData)

               };
       default: 
            return state;
   }
     
}
