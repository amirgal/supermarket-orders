import React from 'react';
import CartItem from './CartItem';
import {Paper,Button} from '@mui/material';

const Cart = ({cart, totalPrice, removeFromCart, saveOrder}) => {
    
    return (
        <Paper elevation={3} className='cart-block'>
            <h3 className="cart-products-title">Cart</h3>
            {cart.map(item => 
                <CartItem key={item.p_id} cartItem={item} removeFromCart={removeFromCart}/>
            )}
            <h4>Total Price: {totalPrice} ₪</h4>
            <Button 
            variant='contained' 
            size='medium'
            onClick={() => saveOrder()}>
                Save Order
            </Button>
        </Paper>
    )
}

export default Cart