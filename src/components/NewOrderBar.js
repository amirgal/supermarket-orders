import React, {useState} from 'react';

const NewOrderBar = (props) => {
    var [input,setInput] = useState('')
    
    const handleInput = (e) => {
        setInput(e.target.value)
      }
    
    const submit = () => {
        // console.log(input)  redirect to orderPage with the input
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
            <button className='new-order-button' onClick={submit}>Create New Order</button>
        </div>
    )
}

export default NewOrderBar