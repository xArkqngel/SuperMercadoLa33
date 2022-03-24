const Product = require("./Product.js");

module.exports = class Market {

    constructor(){
        this.productList = new Array();
    }

   addProduct(product){
        this.productList.push(product);
   }


   selectById(id){
        for (let i = 0; i < this.getSizeList(); i++) {
            let product = this.productList[i];
            if (product.id == id) {
                return product;
            }
        };
   }

   selectByName(name){
       let list = [];
       for (let i = 0; i < this.getSizeList(); i++) {
        let product = this.productList[i];
            if (new String(product.name).includes(name)) {
               list.push(product);
            }
        };
        return list;
   }

   selectByType(typeToSearch){
    let list = [];
    for (let i = 0; i < this.getSizeList(); i++) {
        let product = this.productList[i];
        if (new String(product.type).includes(typeToSearch)) {
            list.push(product);
        }
    };
    return list;
   }

   getSizeList(){
        var i = 0;
        for (const product in this.productList) {
            if (product != null) {
                i++;
            }
        };
        return i;
   }
}

/*let la33 = new Market();
let milo = new Product(la33.idForProducts, "milo", 9000, "comida");
let cubetaHuevo  = new Product(la33.idForProducts, "cubeta huevos", 18000, "comida");
let cloro = new Product(la33.idForProducts, "cloro", 1800, "aseo");
let empanada = new Product(la33.idForProducts, "empanada", 9000, "comida");
let celular = new Product(la33.idForProducts, "celular", 9000000, "tecnologia");
let cargador = new Product(la33.idForProducts, "cargador", 30000, "tecnologia");
let huevos = new Product(la33.idForProducts, "huevos", 3000, "comida");


la33.addProduct(milo);
la33.addProduct(cubetaHuevo);
la33.addProduct(cloro);
la33.addProduct(empanada);
la33.addProduct(celular);
la33.addProduct(cargador);
la33.addProduct(huevos);


console.log(la33.productList);*/





    

