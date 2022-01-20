import React, {useState} from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({products}) => {
    
    return (
        <div className='products-block'>
            {products.map(p => 
                <ProductItem key={p.id} product={p}/>
            )}
        </div>
    )
}

export default ProductsList