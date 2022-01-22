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

router.post('/order', async (req,res) => {
  try {
    const order = req.body
    const query1 = `INSERT INTO orders VALUES ('${order.id}', '${order.clientEmail}','${order.totalPrice}')`
    pool.query(query1)
    order.cart.forEach(p_obj => { 
      const query1 = `INSERT INTO cart_items VALUES ('${order.id}', '${p_obj.product.p_id}','${p_obj.qty}')`
    pool.query(query1)
    });
  } catch (err) {
    console.error(err.message)
  } 
})


module.exports = router