import {Router} from 'express'
const router = Router()
const users = []

router.get('/', (req, res) => {
    console.log(req.dato1)
    res.json(users)
})

router.post('/', (req, res) => {
    const user = req.body
    if(user.name === null){
        console.log("no se agrego nada")
    }
    users.push(user)
    res.send({status: "aproveed", message:"User added succesfuly!"})
})

export default router