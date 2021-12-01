import React, { useEffect } from 'react'
import Product from "../components/Product";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { ListProduct } from '../action/ProductAction';
// import data from "../data";

function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(ListProduct()) 
    }, [dispatch])
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className="row center">
                {
                    products.map((product) =>(
                    <Product key={product._id} product={product}></Product>
                    ))
                }
                </div>
            )}
        </div>
    )
}

export default HomeScreen
