import express from 'express'
import userRouter from './router/users_router.js'
import petsRouter from './router/pets_router.js'


const app = express()
app.use(express.json())
app.use('/static', express.static('public'))
//app.use(express.urlencoded({extended:true}))

//midellware . Intermediario, un paso antes del servicio del endpoint creado. No tiene ruta    
app.use(function(req, res, next){
    console.log('Time:', new Date().toLocaleDateString());
    next();
})

function mid01(req,res,next){
    //le agrego un dato al req
    req.dato1 = 'un dato'
    next()
}

app.use('/apis/users', mid01, userRouter)
app.use('/api/pets', petsRouter)

app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})