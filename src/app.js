const express = require('express')
const app = express()
const ProductManager = require('./productManager')
const manager = new ProductManager('products.json')

app.get('/', async (request, response)=>{
   const products = await manager.getProducts() 
   response.json(products)
})

app.get('/add', async (request, response)=>{
    const body = request.query
    const obj = await manager.addProduct(body) 
    response.json(obj)
})

app.get('/bienvenida', (request, response)=>{
    response.send('<h1 style="color: blue">Saludos desde coderhouse</h1>')
})

app.get('/usuario', (request, response)=>{
    response.send({name: "Isabella", apellido: "Bresciani", edad: 21})
})


app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})