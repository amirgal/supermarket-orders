import React, {useState} from 'react';

const NewOrderBar = (props) => {
    var [input,setInput] = useState('')
    
    const handleInput = (e) => {
        setInput(e.target.value)
      }
    
    const createNewOrder = () => {
        if(input !== ''){
            props.createNewOrder({
                o_id: Math.floor(Math.random() * 10000),
                email: input,
                total_price:0,
                cart: []
            })
            setInput('')
        }
    }

    return (
        <div className='new-order-bar'>
            <input
                onChange={handleInput}
                type="text" 
                placeholder='Enter Clients Email'
                className='new-order-input'
                value={input}
            />
            <button className='new-order-button' onClick={createNewOrder}>Create New Order</button>
        </div>
    )
}

export default NewOrderBar