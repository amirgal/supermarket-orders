import React from 'react';
import CartItem from './CartItem';

const Cart = ({cart, totalPrice, removeFromCart, saveOrder}) => {
    
    return (
        <div className='cart-block'>
            Cart
            {cart.map(item => 
                <CartItem key={item.product.p_id} cartItem={item} removeFromCart={removeFromCart}/>
            )}
            Total Price: {totalPrice}
            <button onClick={() => saveOrder()}>Save Order</button>
        </div>
    )
}

export default Cart