import React, { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';

const CartScreen = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const productId = location.state.id;
    const quantity = location.state.quantity
    const dispatch = useDispatch()
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, quantity))
        }
    }
        , [dispatch, productId, quantity]);
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const removeFromCartHandler = (id) => {
        dispatch (removeFromCart(id))
    };

    const checkoutHandler = () => {
        navigate('/signin?redirect=shopping');
    };
    return (

        <div className="row top">
            <div className="col-2">
                <h1>Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <MessageBox>
                        Cart is empty. <Link to="/">Go Shopping</Link>
                    </MessageBox>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.product}>
                                <div className="row">
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="small"
                                        ></img>
                                    </div>
                                    <div className="min-30">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div>
                                        <select
                                            value={item.quantity}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                )
                                            }
                                        >
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div> {item.price} TND </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>

                                Subtotal ({cartItems.reduce((a, c) => a + parseInt(c.quantity), 0)} items) :
                                {cartItems.reduce((a, c) => (a + (c.price) * parseInt(c.quantity)), 0)} TND
                            </h2>

                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="primary block"
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}









//     (

//         <div>
//             <h1>Cart Screen</h1>
//             <p>
//                 ADD TO CART : ProductID: {productId} Quantity : {quantity}
//             </p>
//         </div>
//     )
// }

export default CartScreen
