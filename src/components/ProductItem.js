import React from 'react';

const ProductItem = ({product, addToCart}) => {
    
    return (
        <div className='product-row'>
            <div className='product-name'>{product.p_name}</div>
            <div className='product-price'>{product.price}</div>
            <button onClick={() => addToCart(product.p_id)}>Add to Cart</button>
        </div>
    )
}

export default ProductItem