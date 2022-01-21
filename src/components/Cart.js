import React, {useState} from 'react';
import CartItem from './CartItem';

const Cart = ({cart}) => {
    
    return (
        <div className='cart-block'>
            Cart
            {cart.map(item => 
                <CartItem key={item.product.id} cartItem={item}/>
            )}
        </div>
    )
}

export default Cart