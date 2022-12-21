const express = require('express')
const app = express()

/*Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON 
en formato urlencoded al recibirlos, debemos indicarlo en forma explícita, agregando las siguiente 
líneas luego de crearlo.
*/
app.use(express.json()) //esto es para recibir los JSON
app.use(express.urlencoded({ extended: true })) //esto es para recibir bien los JSON



const users = []



app.get('/', (req,resp)=>{
    resp.send('OK')
})
app.get('/users', (req,resp)=>{
    resp.json(users)
})

app.post('/api/users', (req,resp)=>{
    const user = req.body
    users.push(user)
    resp.send({satatus:'success', message:'Usuario agregado!'})
})


app.listen(8080, ()=>{
    console.log('El servidor esta corriendo')
})