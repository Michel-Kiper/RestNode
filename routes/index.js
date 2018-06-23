'use strict'

const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')
const userCtrl = require('../Controller/user')
const ProductCtrl = require('../Controller/product')
const user = require('../modelos/usuario')

api.get('/producto',auth,ProductCtrl.getProducts)
api.get('/producto/:productId',ProductCtrl.getProduct)
api.post('/producto', ProductCtrl.saveProduct) 
api.delete('/producto/:productId',ProductCtrl.deleteProduct)
api.put('/producto/:productId',ProductCtrl.updateProduct)
api.get('/private',auth,function(req,res) {
    res.status(200).send({message:'Tienes Acceso'})
})
api.post('/signup',userCtrl.signUp)
api.post('/signin',userCtrl.signIn)

module.exports = api