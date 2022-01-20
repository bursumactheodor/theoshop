
const initialState={
     products:[]
};

export function cartReducer(state=initialState,actionData)
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
