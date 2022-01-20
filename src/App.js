import React, {useState, Component, Fragment } from 'react';
import './App.css';
import {Routes, Route , useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
const axios = require('axios');


const App = (props) => {
  
  const navigate = useNavigate()
  const [orders, setOrders] = useState(
    [
      {id:"1dadf",clientEmail:"aaa@gmail.com", totalPrice:"234"},
      {id:"g4gf",clientEmail:"bbb@gmail.com", totalPrice:"4235"},
      {id:"65hds",clientEmail:"ccc@gmail.com", totalPrice:"4444"}
    ],
  )

  const products =
    [
      {id:"42fsd", productName:"computer", price:4050, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
      {id:"53gdf", productName:"car", price:30000, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
      {id:"gd34h5", productName:"chair", price:433, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
      {id:"gf43j6", productName:"keyboard", price:300, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'}
    ]
  
  const createNewOrder = (newOrderDetails) => {
    navigate('/order-page')
    console.log(newOrderDetails)
  }

  const deleteOrder =  (orderId) => {
    setOrders(orders.filter(t => t.id !== orderId))
  }

  const editOrder = (orderId) => {  
    //redirect to order page with this order id
    console.log(orderId + "edit this order")
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
            <OrderPage products={products}/> 
          }></Route>

        </Routes>
    </div>
  )
}

export default App