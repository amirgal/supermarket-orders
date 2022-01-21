import React, {useState} from 'react';
import  {useLocation} from 'react-router-dom';
import OrderInfo from '../components/OrderInfo';
import ProductsList from '../components/ProductsList';

const OrderPage = ({products}) => {
    const location = useLocation()
    const currentOrder = location.state
    const cart = currentOrder.cart

    const addToCart = (productId) => {
        const productIndex = cart.findIndex(p => p.product.id == productId)
        const product = products.find(p => p.id == productId)

        if(productIndex == -1){
            cart.push({product, qty:1})
            currentOrder.totalPrice += product.price
        }else{
            cart[productIndex].qty++
            currentOrder.totalPrice += product.price
        }
        console.log(cart)
    }

    const saveOrder = () => {
        
    }

    return (
        <div className='order-page'>    
            <OrderInfo/>
            <ProductsList products={products} addToCart={addToCart}/>
        </div>
    )
}

export default OrderPage