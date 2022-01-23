import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';

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
            {/* <input
                onChange={handleInput}
                type="text" 
                placeholder='Enter Clients Email'
                value={input}
            /> */}
            <TextField id="email-input" 
                required 
                label="Required"
                placeholder='Enter Clients Email'
                onChange={handleInput}
                value={input}
            />
            <Button className='new-order-button'  variant='contained' onClick={createNewOrder}>
                Create New Order
            </Button>
        </div>
    )
}

export default NewOrderBar