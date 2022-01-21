import React, {useEffect, useState} from 'react';
import  {useLocation} from 'react-router-dom';
import OrderInfo from '../components/OrderInfo';
import ProductsList from '../components/ProductsList';
import Cart from '../components/Cart';

const OrderPage = ({products}) => {
    const location = useLocation()
    const currentOrder = location.state
    const [totalPrice, setTotalPrice] = useState(currentOrder.totalPrice)
    const [cart, setCart] = useState(currentOrder.cart)

    const addToCart = (productId) => {
        const productIndex = cart.findIndex(p => p.product.id == productId)
        const product = products.find(p => p.id == productId)

        if(productIndex == -1){
            const newCart = [...cart,{product, qty:1}]
            setCart(newCart)
            setTotalPrice(totalPrice + product.price)
        }else{
            cart[productIndex].qty++
            setTotalPrice(totalPrice + product.price)
        }
        console.log(cart)
    }

    const saveOrder = () => {

    }

    return (
        <div className='order-page'>    
            {/* <OrderInfo/> */}
            <ProductsList products={products} addToCart={addToCart}/>
            <Cart cart={cart}/>
        </div>
    )
}

export default OrderPage