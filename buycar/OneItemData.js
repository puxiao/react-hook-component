class OneItemData {
    constructor(product,count){
        this.pid = product.pid;
        this.name = product.name;
        this.price = product.price;
        this.count = count;
        this.cost =  this.price * this.count;
    }
}

export default OneItemData;