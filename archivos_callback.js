const fs = require('fs')
const filename = './ejemplo.txt'
//CREO y escribo
fs.writeFileSync(filename, "Isabella", error =>{
    if(error) return console.log('Hubo un error al escribir el contendio')
    fs.appendFile(filename, 'saludos a isa', error =>{
    if (error) return console.log('Hubo un error al agregar mas contendio')
    
    })

})