import express from 'express'
import multer from 'multer'

const app = express()
app.use(express.json())
app.use('/static', express.static('public'))
//app.use(express.urlencoded({extended:true}))

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const loader = multer 
app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})