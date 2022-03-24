module.exports = class Product{

    ivaValue = 0.19; 
    
    constructor(id, name, price, type){
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = new String(type).toUpperCase();
        this.ivaPrice = this.price*this.ivaValue;
    }

    setPrice(newPrice) {
        price = newPrice;
        this.ivaPrice = newPrice*this.ivaValue
    }
}






