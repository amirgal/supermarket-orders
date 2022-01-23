import React from 'react';
import {Button,Paper} from '@mui/material';

const CartItem = ({cartItem, removeFromCart}) => {
    
    return (
        <Paper className='product-row'>
            <div>{cartItem.p_name}</div>
            <div>x {cartItem.qty}</div>
            <Button 
            variant='outlined' 
            size='small'
            onClick={() => removeFromCart(cartItem.p_id)}>
                Remove
            </Button>
        </Paper>
    )
}

export default CartItem