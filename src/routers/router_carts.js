import {Router} from 'express'


const router = Router()
const carts = []

router.get('/', (req, res) => {
    res.json(carts)
})

router.get('/:pid', (req, res) => {
    const id = req.params.pid
    res.json(carts[id])
})

router.post('/', (req, res) => {
    const prod = req.body
    carts.addProduct(prod.title, prod.description, prod.price,prod.thumbnail,prod.code,prod.stock)
    res.send({status: "aproveed", message:"Product added succesfuly!"})
})

export default router