const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:amirc@localhost/supermarket-orders')

module.exports = router