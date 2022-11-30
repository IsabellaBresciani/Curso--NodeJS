const fs = require('fs')
const filename = './ejemplo.txt'
//CREO y escribo
fs.writeFileSync('./ejemplo.txt', 'hola mundo');
if(fs.existsSync(filename)){//me fijo si exciste
    //Agrego comentarios
    fs.appendFileSync(filename, '\nMas saludos')
    //lo leo
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log(contenido)
    //lo elimino
    fs.unlinkSync(filename, 'utf-8')
}else{
    console.log('el archivo no existe')
}

