import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (productId, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get('/api/products/' + productId );
    dispatch ({
        type: CART_ADD_ITEM,
        payload : {
            name : data.name,
            image : data.image,
            price : data.price,
            countInStock : data.countInStock,
            product:data._id,
            quantity,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (productId, quantity) => async (dispatch, getState) => {
    dispatch ({
        type: CART_REMOVE_ITEM,
        payload : productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}