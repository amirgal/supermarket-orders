import React, {useState} from 'react';
import  {useLocation} from 'react-router-dom';
import OrderInfo from '../components/OrderInfo';
import ProductsList from '../components/ProductsList';
import Cart from '../components/Cart';

const OrderPage = ({products, updateOrder}) => {
    const location = useLocation()
    const [currentOrder, setCurrentOrder] = useState(location.state)
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
    }

    const removeFromCart = (productId) => {
        const productIndex = cart.findIndex(p => p.product.id == productId)
        const product = products.find(p => p.id == productId)

        if(cart[productIndex].qty > 1) {
            cart[productIndex].qty--
            setTotalPrice(totalPrice - product.price)
        }else{
            const newCart = cart.filter(i => i.product.id !== productId)
            setCart(newCart)
            setTotalPrice(totalPrice - product.price)
        }
    }

    const saveOrder = () => {
        const order = currentOrder
        order.cart = cart
        order.totalPrice = totalPrice
        setCurrentOrder(order)
        updateOrder(currentOrder)
    }

    return (
        <div className='order-page'>    
            {/* <OrderInfo/> */}
            <ProductsList products={products} addToCart={addToCart}/>
            <Cart cart={cart} totalPrice={totalPrice} removeFromCart={removeFromCart} saveOrder={saveOrder}/>
        </div>
    )
}

export default OrderPage