import React from 'react'
import Product from '../components/Product'
import { useEffect } from 'react';
// import axios from 'axios';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';


const HomeScreen = () => {
  const dispatch = useDispatch();
  // const [products,setProducts]= useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);


  // To get an object from react store you need to use useSelector
  const productList = useSelector(state => state.productList);
  const {loading,error,products} = productList;
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    // setLoading(true);
    //   const {data} = await axios.get('api/products');
    //   setLoading(false);
    //   setProducts(data)
    // }
    // catch (err){
    //     setError(err.message);
    //     setLoading(false)
    // }}
    // fetchData();

    dispatch(listProducts());
  
  }, [dispatch])
    return (
      <div>
         {loading ? (<LoadingBox/>): error ? (<MessageBox variant="danger" {...error} /> ) : (<div className="row center">
                  {products.map ((product )=> (
                      <Product key={product._id} product={product} /> ))}
                  
               </div>  )} 
      

               </div> )}
export default HomeScreen
