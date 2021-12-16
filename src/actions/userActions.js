const {USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCES,USER_SIGNIN_FAILED, USER_SIGNOUT} = require ('../constants/userConstants');

const axios = require ('axios');
export const signin = (email,password) => async (dispatch) => {
    dispatch ({type: USER_SIGNIN_REQUEST, payload: {email,password}});
    
    try {
        const {data} = await axios.post('/api/users/signin', {email,password});
        dispatch ({type: USER_SIGNIN_SUCCES, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch ({ type : USER_SIGNIN_FAILED, payload: error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItem');
    dispatch ({type: USER_SIGNOUT})
}