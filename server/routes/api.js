const express = require('express')
const router = express.Router()
const pool = require('../db')

//  const products =
//     [
//       {id:"42fsd", productName:"computer", price:4050, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
//       {id:"53gdf", productName:"car", price:30000, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
//       {id:"gd34h5", productName:"chair", price:433, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'},
//       {id:"gf43j6", productName:"keyboard", price:300, img:'https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648'}
//     ]

router.get('/products', async (req,res) => {
  try {
    const products = await pool.query("SELECT * FROM products")
    res.json(products.rows)
  } catch (err) {
    console.error(err.message)
  }
})



module.exports = router