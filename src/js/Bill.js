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



