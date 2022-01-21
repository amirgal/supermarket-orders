import React, {useState, useCallback } from 'react';
import './App.css';
import {Routes, Route , useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';


const App = () => {
  
  const navigate = useNavigate()
  const orderPagePath = '/order-page'
  const [orders, setOrders] = useState(
    [
      {id:"1dadf",clientEmail:"aaa@gmail.com", totalPrice:0, cart: []},
      {id:"g4gf",clientEmail:"bbb@gmail.com", totalPrice:0, cart: []},
      {id:"65hds",clientEmail:"ccc@gmail.com", totalPrice:0, cart: []}
    ],
  )

  const products =
    [
      {id:"42fsd", productName:"computer", price:4050, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
      {id:"53gdf", productName:"car", price:30000, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
      {id:"gd34h5", productName:"chair", price:433, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
      {id:"gf43j6", productName:"keyboard", price:300, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'}
    ]
  
  const createNewOrder = useCallback((order) => {
    navigate(orderPagePath,{state: order})
  })

  const deleteOrder =  useCallback((orderId) => {
    setOrders(orders.filter(t => t.id !== orderId))
  })

  const editOrder = useCallback((orderId) => {  
    const order = orders.find(o => o.id === orderId)
    navigate(orderPagePath,{state: order})
  })


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
            /> 
          }></Route>

        </Routes>
    </div>
  )
}

export default App