import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCES, PRODUCT_LIST_FAILED, PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCES, PRODUCT_DETAILS_FAILED } from "../constants/productConstants";

const initialState ={
    loading:true,
     products: [],
}

export const productListReducer = (
    state = initialState , action) => {
       
        switch (action.type) {
            case PRODUCT_LIST_REQUEST :
                return { loading:true };
            
            case PRODUCT_LIST_SUCCES :
                return { loading:false , products: action.payload };
            
            case PRODUCT_LIST_FAILED :
                return {loading:false , error: action.payload };
            
            default :
            return state;
        }}
        export const productDetailsReducer = (
            state = {loading: true, product:{}} , action) => {
               
                switch (action.type) {
                    case PRODUCT_DETAILS_REQUEST :
                        return { loading:true };
                    
                    case PRODUCT_DETAILS_SUCCES :
                        return { loading:false , product: action.payload };
                    
                    case PRODUCT_DETAILS_FAILED :
                        return {loading:false , error: action.payload };
                    
                    default :
                    return state;
                }}
