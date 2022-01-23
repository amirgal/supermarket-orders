import React from 'react';
import {Paper, Button} from '@mui/material';

const ProductItem = ({product, addToCart}) => {
    
    return (
            <Paper className='product-row'>
                <p className='product-name'>{product.p_name}</p>
                <p className='product-price'>{product.price}</p>
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