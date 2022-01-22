import React from 'react';

const CartItem = ({cartItem, removeFromCart}) => {
    const product = cartItem.product
    
    return (
        <div className='cart-item-row'>
            <div>{product.p_name}</div>
            <div>x {cartItem.qty}</div>
            <button onClick={() => removeFromCart(product.p_id)}>Remove</button>
        </div>
    )
}

export default CartItem