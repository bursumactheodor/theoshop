
const initialSate={
     products:[]
};

function cartReducer(state=initialSate,actionData)
{
    switch (actionData.type)
    {
        case'ADD_TO_CART':
            return {
                    ...state, 
                    products: [
                        ...state.products,
                        actionData.payload.product
                    ]
                   };
        default: 
             return state;
    }
      
}
export default cartReducer;