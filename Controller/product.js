'use strict'

const Product = require('../modelos/product')

function getProduct(req,res){
    let productId= req.params.productId
    Product.findById(productId,(err, product) => {
        if(err) return res.status(500).send({message:'Error al realizar la petición'})
        if(!product) return res.status(404).send({message:'El producto no existe'})

        res.status(200).send({ product })

    })
}

function getProducts(req,res){
    Product.find({},(err,products) => {
        if(err) return res.status(500).send({message:'Error al consultar los productos'})
        if(!products) return res.status(400).send({message:'Productos no existen'})

        res.status(200).send({products})
    })
}
function updateProduct(req,res){
    let productId= req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update , (err, productUpdate) => {
        if(err) return res.status(500).send({message:'Error al realizar la actualización'})
        res.status(200).send({ productUpdate })

    })
}
function deleteProduct(req,res){
    let productId= req.params.productId
    Product.findById(productId,(err, product) => {
        if(err) return res.status(500).send({message:'Error al realizar la petición'})
        if(!product) return res.status(404).send({message:'El producto no existe'})
    
    product.remove(err =>{
        if(err) return res.status(500).send({message:'Error al realizar la petición'})
        res.status(200).send({message:'Producto Eliminado'})
    })
  })
}

function saveProduct(req,res){
    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description
    product.save((err, productStored) => {
        if(err) res.status(500).send({menssage:'Error al guardar el producto'})        
        res.status(200).send({message:productStored})
    })
}


module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct
}