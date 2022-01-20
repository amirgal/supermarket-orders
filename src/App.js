import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route , history as useHistory} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
const axios = require('axios');


class App extends Component {

  constructor() {
    super()
      this.state = {
        orders: [
          {id:"1dadf",clientEmail:"aaa@gmail.com", totalPrice:"234"},
          {id:"g4gf",clientEmail:"bbb@gmail.com", totalPrice:"4235"},
          {id:"65hds",clientEmail:"ccc@gmail.com", totalPrice:"4444"}
        ],
        products:[
          {id:"42fsd", productName:"computer", price:4050, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
          {id:"53gdf", productName:"car", price:30000, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
          {id:"gd34h5", productName:"chair", price:433, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
          {id:"gf43j6", productName:"keyboard", price:300, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'}
        ]
    }
  }

  createNewOrder = (newOrderDetails) => {
    //   redirect to orderPage with empty cart
    // history.push('/order-page')
    console.log(newOrderDetails)
  }

  deleteOrder =  (orderId) => {
    const orders = this.state.orders.filter(t => t.id !== orderId)
    this.setState({orders})
    // await axios.delete(`/transaction/${transId}/${this.state.userId}`)
    // const userTransactions = this.state.userTransactions.filter(t => t._id !== transId)
    // this.setState({userTransactions})
  }

  editOrder = (orderId) => {  
    //redirect to order page with this order id
    console.log(orderId + "edit this order")
  }

  render() {

    return (
      <div className="App">
          <Router>
            <Routes>
              
              <Route path="/" exact element={
                <HomePage 
                orders={this.state.orders} 
                deleteOrder={this.deleteOrder} 
                editOrder={this.editOrder} 
                createNewOrder={this.createNewOrder}
                />
              }></Route>

              <Route path='/order-page' exact element={
                <OrderPage/>
              }></Route>

          </Routes>
        </Router>

        {/* <HomePage 
          orders={this.state.orders} 
          deleteOrder={this.deleteOrder} 
          editOrder={this.editOrder} 
          createNewOrder={this.createNewOrder}
        />
        <OrderPage/> */}
      </div>
    );
  }
}

export default App;



