import fs from 'fs'
class ProductManager2{
    constructor (){
        this.products = []
    }
    getElementById = (id)=>{
        let elem
        this.products.forEach(element => {
            if(element.id == id){
                elem = element
            }else{
                console.log("El elemento no fue encontrado")
            }
        })
        return elem
    }

    getProducts = () => {return this.products}
    getNextID = () =>{
        const count = this.products.length
        return (count>0) ? this.products[count-1].id + 1 : 1
    }
    addProduct = (title, description, price,thumbnail,code,stock) => {
        const count = this.products.length
        let sigue =0;
        if(count>0) {
            this.products.forEach(element => {
                if(element.code != code){
                    sigue =1;
                }else{
                    console.log("El codigo ingresado ya pertenece a otro producto");
                }})
            }else{
                const id = this.getNextID();
                    const product = {
                        id,
                        title,
                        description,
                        price,
                        thumbnail,
                        code,
                        stock
                    }
    
                    this.products.push(product);
            }
            if(sigue==1){
                const id = this.getNextID();
                    const product = {
                        id,
                        title,
                        description,
                        price,
                        thumbnail,
                        code,
                        stock
                    }
                    this.products.push(product);
            }
        }   
    }

export default ProductManager2