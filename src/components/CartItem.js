import React, {useState} from 'react';

const CartItem = ({cartItem}) => {
    const product = cartItem.product
    return (
        <div className='cart-item-row'>
            <div>{product.productName}</div>
            <div>x {cartItem.qty}</div>
        </div>
    )
}

export default CartItem