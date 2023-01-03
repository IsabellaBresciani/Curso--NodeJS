import {Router} from 'express'
import ProductManager from './productManager2.js'

const router = Router()
const products = new ProductManager()

router.get('/', (req, res) => {
    res.json(products)
})

router.get('/:pid', (req, res) => {
    const id = req.params.pid
    res.json(products[id])
})

router.post('/', (req, res) => {
    const prod = req.body
    products.addProduct(prod.title, prod.description, prod.price,prod.thumbnail,prod.code,prod.stock)
    res.send({status: "aproveed", message:"Product added succesfuly!"})
})

export default router