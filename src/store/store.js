import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { cartReducer } from './cart/cartReducers';
import { userReducer } from './user/userReducers';
import {favoritesReducer} from './favorites/favoritesReducers';
import logger from 'redux-logger';



const rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
    favorites:favoritesReducer
});

const middlewares=[ReduxThunk,logger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));
export default store; 