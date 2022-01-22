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
    console.log(newOrders)
  } catch (err) {
    console.error(err.message)
  } 
})

router.post('/order', async (req,res) => {
  try {
    const order = req.body
    const query1 = `INSERT INTO orders VALUES ('${order.id}', '${order.clientEmail}','${order.totalPrice}')`
    pool.query(query1)
    order.cart.forEach(p_obj => { 
      const query1 = `INSERT INTO cart_items VALUES ('${order.id}', '${p_obj.product.p_id}','${p_obj.qty}')`
    pool.query(query1)
    res.end()
    });
  } catch (err) {
    console.error(err.message)
  } 
})

module.exports = router