import React from 'react';

const OrderItem = ({order, deleteOrder, editOrder}) => {

    return (
        <div className='order-row'>
            <div className='order-email'>{order.clientEmail}</div>
            <div className='order-price'>{order.totalPrice}</div>
            <button className='edit-order-button' onClick={() => editOrder(order.id)}>Edit</button> 
            <button className='delete-order-button' onClick={() => deleteOrder(order.id)}>Delete</button>
        </div>
    )
}

export default OrderItem
