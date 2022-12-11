const ProductManager = require('./productManager')
const manager = new ProductManager('./products.json')


async () =>{
    await manager.addProduct({
        name: "Wine",
        price: 150
    })
    await manager.addProduct({
        name: "Beer",
        price: 180
    })

    console.log(await manager.getProducts())

    await manager.updateProduct(2, {
        name: "Beer",
        price: 120
    })

    console.log(await manager.getProducts())

}