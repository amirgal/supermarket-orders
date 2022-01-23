import React from 'react';
import {Paper, Button} from '@mui/material';

const ProductItem = ({product, addToCart}) => {
    
    return (
            <Paper className='product-row'>
                <div className='product-name'>{product.p_name}</div>
                <div className='product-price'>{product.price}</div>
                <Button className='addtocart-button' 
                variant='outlined' 
                size='small'
                onClick={() => addToCart(product.p_id)}>
                    Add To Cart
                </Button>
            </Paper>
    )
}

export default ProductItem