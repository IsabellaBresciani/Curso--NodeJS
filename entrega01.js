class ProductManager{
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

//uso ProductManager como molde y creo un nuevo objeto
let productos = new ProductManager()

//Agrego los elementos
productos.addProduct("Pantuflas","suaves y comodas","$3000", "", 1, 300);
productos.addProduct("Pantalon","XL","$8000", "", 1, 200);
productos.addProduct("Remera","M","$1000", "", 3, 200);
productos.addProduct("Remera01","ML","$11000", "", 4, 200);
console.log(productos);

//metodo que retorna elemento por id.
let id03 = productos.getElementById(3)
console.log("El elemento con id 3 es el siguiente:");
console.log(id03);

//metodo que retorna todos los valores incluidos en el array productos.
let productos02 = productos.getProducts()
console.log(productos02)