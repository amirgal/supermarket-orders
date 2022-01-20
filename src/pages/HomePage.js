import React, {useState} from 'react';
import NewOrderBar from '../components/NewOrderBar';
import OrdersList from '../components/OrdersList';

const HomePage = ({orders,deleteOrder}) => {
    
    return (
        <div className='home-page'>
            <NewOrderBar/>
            <OrdersList orders={orders} deleteOrder={deleteOrder}/>
        </div>
    )
}

export default HomePage