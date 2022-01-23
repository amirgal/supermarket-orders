import React from 'react';

const CartItem = ({cartItem, removeFromCart}) => {
    
    return (
        <div className='cart-item-row'>
            <div>{cartItem.p_name}</div>
            <div>x {cartItem.qty}</div>
            <button onClick={() => removeFromCart(cartItem.p_id)}>Remove</button>
        </div>
    )
}

export default CartItem