import {applyMiddleware,combineReducers,compose, createStore} from 'redux';
//import data from './data';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer';
import { productListReducer,productDetailsReducer } from './reducers/productReducers';
import {userSigninReducer} from './reducers/userReducer';
const initialState ={
    cart : {
        cartItems : localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []},
        userSignIn: {
            userInfo : localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : []
        },
    }

// const reducer = (state,action) => {
//     return {products : data.products}
// };
const reducer= combineReducers({
    productList: productListReducer, 
    productDetail: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSigninReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)
     ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;