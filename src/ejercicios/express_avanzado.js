const express = require('express')
const app = express()

/*Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON 
en formato urlencoded al recibirlos, debemos indicarlo en forma explícita, agregando las siguiente 
líneas luego de crearlo.
*/
app.use(express.json()) //esto es para recibir los JSON
app.use(express.urlencoded({ extended: true })) //esto es para recibir bien los JSON



let users = []



app.get('/', (req,resp)=>{
    resp.send('OK')
})
app.get('/user', (req,resp)=>{
    resp.json(users)
})

app.post('/api/user', (req,resp)=>{
    const user = req.body
    users.push(user)
    resp.send({status:'success', message:'Usuario agregado!'})
})
app.put('/api/user', (req,resp)=>{
    const user = req.body
    const idx = users.findIndex(u => u.name.toLowerCase() == user.name.toLowerCase())
    if (idx <0){
        return resp.status(404).json({status: "Error", error: "User not found"})
    }
    users[idx]= user
    resp.send({status:'success', message:'Usuario modificado!'})
})
app.delete('/api/user', (req,resp)=>{
    const user = req.body
    const length = users.length
    users = users.filter(u => u.name.toLowerCase() != user.name.toLowerCase())
    if(length == users.length){
        return resp.send({status: "Error", error: "User not found"})
    }
    resp.send({status:'success', message:'Usuario eliminado con exito!'})
})

app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})