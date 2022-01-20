import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
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
        ]
    }
  }

  createNewOrder = (email) => {
    //   redirect to orderPage with empty cart
    console.log(email)
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
          {/* <img className="product-img" src={'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'} alt=""/> */}
          {/* <Router>
            <Routes>
              <Route path='/' exact render={() => 
                <HomePage orders={this.state.orders} deleteOrder={this.deleteOrder} editOrder={this.editOrder}/>
              }/>
              <Route path='/OrderPage' exact render={() => 
                <OrderPage/>
              }/>
          </Routes>
        </Router> */}

        <HomePage 
          orders={this.state.orders} 
          deleteOrder={this.deleteOrder} 
          editOrder={this.editOrder} 
          createNewOrder={this.createNewOrder}
        />
        <OrderPage/>
      </div>
    );
  }
}

export default App;



