import React from 'react';
import CartItem from './CartItem';

const Cart = ({cart, totalPrice, removeFromCart}) => {
    
    return (
        <div className='cart-block'>
            Cart
            {cart.map(item => 
                <CartItem key={item.product.id} cartItem={item} removeFromCart={removeFromCart}/>
            )}
            Total Price: {totalPrice}
        </div>
    )
}

export default Cart