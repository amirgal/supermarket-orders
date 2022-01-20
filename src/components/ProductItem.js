import React, {useState} from 'react';

const ProductItem = (props) => {
    const product = props.product

    return (
        <div className='product-row'>
            <div className='product-name'>{product.productName}</div>
            <div className='product-price'>{product.price}</div>
        </div>
    )
}

export default ProductItem