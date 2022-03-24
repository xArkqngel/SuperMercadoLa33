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





    

