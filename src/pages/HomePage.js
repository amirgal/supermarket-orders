import React, {useState} from 'react';
import NewOrderBar from '../components/NewOrderBar';
import OrdersList from '../components/OrdersList';

const HomePage = ({orders, deleteOrder, editOrder, createNewOrder}) => {
    
    return (
        <div className='home-page'>
            <NewOrderBar createNewOrder={createNewOrder}/>
            <OrdersList 
                orders={orders} 
                deleteOrder={deleteOrder} 
                editOrder={editOrder}
            />
        </div>
    )
}

export default HomePage