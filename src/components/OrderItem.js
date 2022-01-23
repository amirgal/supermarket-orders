import React from 'react';
import {TableCell,TableRow,Button} from '@mui/material';

const OrderItem = ({order, deleteOrder, editOrder}) => {

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell>{order.email}</TableCell>
            <TableCell>{order.total_price}</TableCell>
            <TableCell>
                <Button className='edit-order-button' 
                variant='contained' 
                onClick={() => editOrder(order.o_id)}>
                    Edit Order
                </Button>
                {/* <button className='edit-order-button' onClick={() => editOrder(order.o_id)}>Edit Order</button> */}
            </TableCell>
            <TableCell>
                <Button className='delete-order-button' 
                variant='contained' 
                onClick={() => deleteOrder(order.o_id)}>
                    Delete Order
                </Button>
                {/* <button className='delete-order-button' onClick={() => deleteOrder(order.o_id)}>Delete Order</button> */}
            </TableCell>
        </TableRow>
    )
}

export default OrderItem
