import express from 'express'
import prodRouter from './routers/router_products.js'
import cartRouter from './routers/router_carts.js'


const app = express()
app.use(express.json())
app.use('/static', express.static('public'))
//app.use(express.urlencoded({extended:true}))


app.use('/api/products', prodRouter)
app.use('/api/carts', cartRouter)

app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})