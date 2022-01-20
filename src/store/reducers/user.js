const initialState={
    data:null,
    loading:false,
    error:null
};

export function userReducer(state = initialState, actionData){
    switch (actionData.type)
    {
        case'START_LOADING':
            return {
                    ...state, 
                    loading:true
                   };
        case 'UPDATE_USER_DATA' :
            return{
                    ...state,
                    data:actionData.payload,
                    loading:false
            }  
        case 'UPDATE_ERROR' :
            return{
                    ...state,
                    error:actionData.payload

            }          
        default: 
             return state;
    }
}