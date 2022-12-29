import express from 'express'
import userRouter from './router/users_router.js'
import petsRouter from './router/pets_router.js'


const app = express()
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/pets', petsRouter)
app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})