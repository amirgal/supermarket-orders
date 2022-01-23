import React from 'react';
import OrderItem from './OrderItem';
import {TableContainer,Table,TableHead,TableRow,TableCell,Paper,TableBody} from '@mui/material';

const OrdersList = ({orders, deleteOrder, editOrder}) => {
    
    return (
        <TableContainer className='orders-table-container' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Client Email</TableCell>
                    <TableCell>Total Price</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(o => 
                    <OrderItem key={o.o_id} order={o} deleteOrder={deleteOrder} editOrder={editOrder}/>
                )}
            </TableBody>
            </Table>
        </TableContainer>
    )
} 

export default OrdersList