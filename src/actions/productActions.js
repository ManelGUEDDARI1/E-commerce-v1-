import axios from "axios";
import { PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES , PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCES,PRODUCT_DETAILS_FAILED} from "../constants/productConstants"

export const listProducts=() => async (dispatch) => {
    dispatch ({
        type: PRODUCT_LIST_REQUEST,
    });
    try {
        const {data} = await axios.get('/api/products');
        dispatch ({type: PRODUCT_LIST_SUCCES, payload: data});
    }
    catch (error) {
        dispatch ({ type : PRODUCT_LIST_FAILED, payload: error.message})
    }
}
export const productsDetails = (productId) => async (dispatch) => {
    dispatch ({
        type: PRODUCT_DETAILS_REQUEST,
    });
    try {
      
        const {data} = await axios.get('/api/products/' + productId );
        dispatch ({type: PRODUCT_DETAILS_SUCCES, payload: data});
    }
    catch (error) {
        dispatch ({ type : PRODUCT_DETAILS_FAILED, payload: error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}