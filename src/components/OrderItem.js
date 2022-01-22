import React from 'react';

const OrderItem = ({order, deleteOrder, editOrder}) => {

    return (
        <div className='order-row'>
            <div className='order-email'>{order.email}</div>
            <div className='order-price'>{order.total_price}</div>
            <button className='edit-order-button' onClick={() => editOrder(order.o_id)}>Edit</button> 
            <button className='delete-order-button' onClick={() => deleteOrder(order.o_id)}>Delete</button>
        </div>
    )
}

export default OrderItem
