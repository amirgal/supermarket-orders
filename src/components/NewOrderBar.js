import React, {useState} from 'react';

const NewOrderBar = (props) => {
    var [input,setInput] = useState('')
    
    const handleInput = (e) => {
        setInput(e.target.value)
      }
    
    const createNewOrder = () => {
        props.createNewOrder(input)
        setInput('')
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