class Mkulima{
     constructor(farms,vendors,products,orders){
         this.farms=[];
         this.vendors=[];
         this.products=[];
         this.orders=[];
     }
    addFarm(FarmId,name,farmer,phone,address){
         var farm = {
             FarmId:FarmId,
             name:name,
             farmer:farmer,
             phone:phone,
             address:address,

         }
    this.farms.push(farm);
    return this.farms

    }
    removeFarm(FarmId){
    let farm=this.getFarm(FarmId)
    let index=this.farms.indexOf(farm);
    this.farms.splice(index,1);
    return delete this.farms[farm]
    }
    updateFarm(FarmId,name,farmer,phone,address){
        var farm={
            FarmId:FarmId,
            name:name,
            farmer:farmer,
            phone:phone,
            address:address,
        }
        this.farms.push(farm);
        return this.farms
    }
    getFarm(FarmId){
        let dfarm= this.farms.find(dfarm=>dfarm.FarmId==FarmId)
        return dfarm
            }

    addProduct(productId,name,price){
        var product ={
            productId: productId,
            name:name,
            price:price,
        }
       this.products.push(product);
       return this.products
    }
    removeProduct(productId){
        let product=this.getProduct(productId);
        let index=this.product.indexOf(product);
        this.products.splice(index,1);
    }
    updateProduct(productId,name,price){
        var product ={
            productId: productId,
            name:name,
            price:price,
    }
    this.products.push(product);
}
getProduct(productId){
    for(var i=0; i<this.product.length;i++){
        let product=this.product[i];
        if(this.product.productId===product){
            return product;
        }
    }
}
printProducts(){
    let products=this.getProduct;
    return `${product}costs ${price}`;
}
calculateOderCost(productId,quantity){
    var cost=productId*quantity;
    return cost
}
}
    let mkulima =new Mkulima([],[],[],[])
console.log(mkulima.addFarm(7784,"Agro farmers ltd","Janet",4549680385,"Rugyeyo"));
console.log(mkulima.addFarm(3465,"kinkizi farm ltd","sandra",345893,"kihihi"));
console.log(mkulima.addFarm(222,"Aine consumers ltd","Promise",22334433,"kasese"));
console.log(mkulima.addFarm(1213,"mukunyu farm enterprises","Joan",9989389,"kampala"));
console.log(mkulima.removeFarm(3465));
console.log(mkulima.updateFarm(48879,"modern farm ltd","Keisha",478909,"kisumu"));
console.log(mkulima.getFarm(1213));
console.log(mkulima.addProduct(345,"apple",3000));
console.log(mkulima.addProduct(3356,"mangoes",5000));
 console.log(mkulima.calculateOderCost(345,67));
 console.log(mkulima.calculateOderCost(3356,67));

