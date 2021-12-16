import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCES,USER_SIGNIN_FAILED,USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state= {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading : true};
            case USER_SIGNIN_SUCCES:
                return {loading: false, userInfo: action.payload };
                case USER_SIGNIN_FAILED:
                return {loading: false, error: action.payload };
                case USER_SIGNOUT:
                return {};
                default : 
                return state;


    }
}