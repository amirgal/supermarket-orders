import React from 'react';
import ProductItem from './ProductItem';
import Paper from '@mui/material/Paper';

const ProductsList = ({products, addToCart}) => {
    
    return (
        <Paper elevation={3} className='products-block'>
            <h3 className="cart-products-title">Products</h3>
            <div className='product-row header'>
                <p>Name</p>
                <p>Price</p>
            </div>
            {products.map(p => 
                <ProductItem key={p.p_id} product={p} addToCart={addToCart}/>
            )}
        </Paper>
    )
}

export default ProductsList