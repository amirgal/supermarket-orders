const express = require('express')
const router = express.Router()
const pool = require('../db')


router.get('/products', async (req,res) => {
  try {
    const products = await pool.query("SELECT * FROM products")
    res.json(products.rows)
  } catch (err) {
    console.error(err.message)
  }
})


const loadOrderCart = async (orderId) => {
  const query1 = `SELECT c.p_id, p_name,qty,price,img FROM cart_items c,products p WHERE o_id = ${orderId} AND c.p_id = p.p_id;`
  const data = await pool.query(query1)
  const cart = data.rows
  return cart
}

router.get('/orders', async (req,res) => {
  try {
    const orders = await pool.query("SELECT * FROM orders")
    const newOrders = orders.rows
    for (let i = 0; i < newOrders.length; i++) {
      const order = newOrders[i];
      order.cart = await loadOrderCart(order.o_id)
    }
    res.json(newOrders)
  } catch (err) {
    console.error(err.message)
  } 
})

router.post('/order', async (req,res) => {
  try {
    const order = req.body
    const query1 = `INSERT INTO orders VALUES ('${order.o_id}', '${order.email}','${order.total_price}')`
    pool.query(query1)
    order.cart.forEach(p_obj => { 
      const query1 = `INSERT INTO cart_items VALUES ('${order.o_id}', '${p_obj.p_id}','${p_obj.qty}')`
    pool.query(query1)
    });
  res.end()
  } catch (err) {
    console.error(err.message)
  } 
}) 

router.put('/order', async (req,res) => {
  try {
    const order = req.body
    const query1 = `UPDATE orders SET total_price = ${order.total_price} WHERE o_id = ${order.o_id};`
    pool.query(query1)
    const query2 = `DELETE FROM cart_items WHERE o_id = ${order.o_id};`
    await pool.query(query2)
    order.cart.forEach(p_obj => { 
      const query = `INSERT INTO cart_items VALUES ('${order.o_id}', '${p_obj.p_id}','${p_obj.qty}')`
    pool.query(query)
    });
  res.end()
  } catch (err) {
    console.error(err.message)
  } 
})

router.delete('/order/:orderId', async(req,res) => {
  const orderId = req.params.orderId
  const query1 = `DELETE FROM orders WHERE o_id = ${orderId}`
  pool.query(query1)
  const query2 = `DELETE FROM cart_items WHERE o_id = ${orderId}`
  pool.query(query2)
  res.end()
})

module.exports = router