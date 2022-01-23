import React, {useState, useEffect } from 'react';
import './App.css';
import {Routes, Route , useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
const axios = require('axios');

const App = () => {
  
  const navigate = useNavigate()
  const orderPagePath = '/order-page'
  const [orders, setOrders] = useState([])
  const [products,setProducts] = useState([])

  const getProducts = async () => {
    const productsData = await axios.get('http://localhost:4000/products')
    setProducts(productsData.data)
  }

  const getOrders = async () => {
    const ordersData = await axios.get('http://localhost:4000/orders')
    setOrders(ordersData.data)
  }

  useEffect(()=>{
    getProducts()
    getOrders()
  },[])

  
  const createNewOrder = (order) => {
    navigate(orderPagePath,{state: order})
  }

  const deleteOrder =  (orderId) => {
    setOrders(orders.filter(t => t.o_id !== orderId))
  }

  const editOrder = (orderId) => {  
    const order = orders.find(o => o.o_id === orderId)
    navigate(orderPagePath,{state: order})
  }

  const updateOrder = (order) => {
    const orderIndex = orders.findIndex(o => o.o_id === order.o_id)

    if(orderIndex === -1){
      setOrders([...orders, order])
      axios.post('http://localhost:4000/order', order)
    }else{
      const updatedOrders = orders
      updatedOrders[orderIndex] = order
      axios.put('http://localhost:4000/order', order)
    }
    navigate('/')
  }


  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={
            <HomePage 
              orders={orders} 
              deleteOrder={deleteOrder} 
              editOrder={editOrder} 
              createNewOrder={createNewOrder}
            />
          }></Route>

          <Route path='/order-page' exact element={
            <OrderPage 
              products={products} 
              updateOrder={updateOrder}
            /> 
          }></Route>

        </Routes>
    </div>
  )
}

export default App