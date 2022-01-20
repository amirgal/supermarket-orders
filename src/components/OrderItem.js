import React, {useState} from 'react';

const OrderItem = (props) => {

    const order = props.order
    const deleteOrder = () => {
        props.deleteOrder(order.id)
    }
    const editOrder = () => {
        props.editOrder(order.id)
    }

    return (
        <div className='order-row'>
            <div className='order-email'>{order.clientEmail}</div>
            <div className='order-price'>{order.totalPrice}</div>
            <button className='edit-order-button' onClick={editOrder}>Edit</button>  {/* redirect to  order page with this order id */}
            <button className='delete-order-button' onClick={deleteOrder}>Delete</button>
        </div>
    )
}

export default OrderItem
