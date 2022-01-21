import React, {useState} from 'react';

const ProductItem = ({product, addToCart}) => {
    
    return (
        <div className='product-row'>
            <div className='product-name'>{product.productName}</div>
            <div className='product-price'>{product.price}</div>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
    )
}

export default ProductItem