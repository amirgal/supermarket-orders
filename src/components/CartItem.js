import React from 'react';
import {Fab,Paper} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({cartItem, removeFromCart}) => {
    
    return (
        <Paper className='product-row'>
            <p>{cartItem.p_name}</p>
            <p>x {cartItem.qty}</p>
            <Fab className='delete-button'
            onClick={() => removeFromCart(cartItem.p_id)}>
                <DeleteIcon />
            </Fab>
        </Paper>
    )
}

export default CartItem