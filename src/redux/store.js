import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { wishlistReducer } from './reducers/wishlistReducer';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;