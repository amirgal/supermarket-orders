import React, {useState} from 'react';
import OrderInfo from '../components/OrderInfo';
import ProductsList from '../components/ProductsList';

const OrderPage = ({products}) => {
    
    return (
        <div className='order-page'>    
            <OrderInfo/>
            <ProductsList products={products}/>
        </div>
    )
}

export default OrderPage