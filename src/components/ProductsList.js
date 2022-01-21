import React, {useState} from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({products, addToCart}) => {
    
    return (
        <div className='products-block'>
            {products.map(p => 
                <ProductItem key={p.id} product={p} addToCart={addToCart}/>
            )}
        </div>
    )
}

export default ProductsList