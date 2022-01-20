import React, {useState} from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({orders, deleteOrder, editOrder}) => {
    
    return (
        <div className='orders-block'>
            {orders.map(o => 
                <OrderItem key={o.id} order={o} deleteOrder={deleteOrder} editOrder={editOrder}/>
            )}
        </div>
    )
}

export default OrdersList