import {Router} from 'express'
const router = Router()
const pets = []

router.get('/', (req, res) => {
    res.json(pets)
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)
    res.send({status: "aproveed", message:"User added succesfuly!"})
})

export default router