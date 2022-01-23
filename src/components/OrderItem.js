import React from 'react';
import {TableCell,TableRow,Button,IconButton, Fab} from '@mui/material';
import {Delete as DeleteIcon, Edit as EditIcon} from '@mui/icons-material';

const OrderItem = ({order, deleteOrder, editOrder}) => {

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell>{order.email}</TableCell>
            <TableCell>{order.total_price}</TableCell>
            <TableCell>
                <Fab className='edit-order-button'
                onClick={() => editOrder(order.o_id)}>
                    <EditIcon />
                </Fab>
            </TableCell>
            <TableCell>
                <Fab className='delete-button'
                onClick={() => deleteOrder(order.o_id)}>
                    <DeleteIcon />
                </Fab>
            </TableCell>
        </TableRow>
    )
}

export default OrderItem
