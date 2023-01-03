import {Router} from 'express'
const router = Router()
const pets = []

router.get('/', (req, res) => {
    const dato = req.dato1
    console.log(dato)
    res.json(pets)
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)
    res.send({status: "aproveed", message:"User added succesfuly!"})
})

export default router