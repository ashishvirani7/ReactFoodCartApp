import {combineReducers} from 'redux';

import allItemsReducer from './items.js';
import cartItemsReducer from './cartitems.js';
import cartTotalReducer from './carttotal.js';

const allReducers = combineReducers({
    items: allItemsReducer,
    cartitems: cartItemsReducer,
    carttotal: cartTotalReducer
});

export default allReducers;

