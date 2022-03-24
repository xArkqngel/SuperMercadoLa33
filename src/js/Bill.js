const Market = require("./Market.js")
const Product = require("./Product.js")

module.exports = class Bill{

    constructor(nameClient){
        this.nameClient =  nameClient;
        this.productsToBuy = [];
        this.date = Date.now();
    }

    addToCar(product){
        this.productsToBuy.push(product);
    }

    getSizeBill(){
        var i = 0;
        for (const product in this.productsToBuy) {
            if (product != null) {
                i++;
            }
        };
        return i;
   }

    calculateSubTotal(){
        let subtotal = 0;
        for (let i = 0; i < this.getSizeBill(); i++) {
            subtotal += this.productsToBuy[i].price;
        }
        return subtotal;
    }

    calculateIva(){
        let ivaPriceBill = 0;
        for (let i = 0; i < this.getSizeBill(); i++) {
            ivaPriceBill += this.productsToBuy[i].ivaPrice;
        }
        return ivaPriceBill;
    }

    getTotalPrice(){
        return this.calculateIva() + this.calculateSubTotal();
    }
}

let la33 = new Market();
let milo = new Product(la33.idForProducts, "milo", 9000, "comida");
let cubetaHuevo  = new Product(la33.idForProducts, "cubeta huevos", 18000, "comida");
let cloro = new Product(la33.idForProducts, "cloro", 1800, "aseo");
let empanada = new Product(la33.idForProducts, "empanada", 2000, "comida");
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

let client = new Bill("Eliana");
client.addToCar(la33.selectByName("empanada"));
client.addToCar(la33.selectByName("cloro"));
client.addToCar(la33.selectByName("cubeta"));
client.addToCar(la33.selectByName("cargador"));

for (let i = 0; i < client.getSizeBill(); i++) {
    console.log(client.productsToBuy[i]);
}



